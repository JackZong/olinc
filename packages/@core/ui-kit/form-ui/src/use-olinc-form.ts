import type {
  BaseFormComponentType,
  ExtendedFormApi,
  OlincFormProps,
} from './types';

import { defineComponent, h, isReactive, onBeforeUnmount, watch } from 'vue';

import { useStore } from '@olinc-core/shared/store';

import { FormApi } from './form-api';
import OlincUseForm from './olinc-use-form.vue';

export function useOlincForm<
  T extends BaseFormComponentType = BaseFormComponentType,
>(options: OlincFormProps<T>) {
  const IS_REACTIVE = isReactive(options);
  const api = new FormApi(options);
  const extendedApi: ExtendedFormApi = api as never;
  extendedApi.useStore = (selector) => {
    return useStore(api.store, selector);
  };

  const Form = defineComponent(
    (props: OlincFormProps, { attrs, slots }) => {
      onBeforeUnmount(() => {
        api.unmount();
      });
      api.setState({ ...props, ...attrs });
      return () =>
        h(OlincUseForm, { ...props, ...attrs, formApi: extendedApi }, slots);
    },
    {
      name: 'OlincUseForm',
      inheritAttrs: false,
    },
  );
  // Add reactivity support
  if (IS_REACTIVE) {
    watch(
      () => options.schema,
      () => {
        api.setState({ schema: options.schema });
      },
      { immediate: true },
    );
  }

  return [Form, extendedApi] as const;
}
