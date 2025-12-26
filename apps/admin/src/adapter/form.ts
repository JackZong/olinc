import type {
  OlincFormSchema as FormSchema,
  OlincFormProps,
} from '@olinc/common-ui';

import type { ComponentType } from './component';

import { setupOlincForm, useOlincForm as useForm, z } from '@olinc/common-ui';
import { $t } from '@olinc/locales';

async function initSetupOlincForm() {
  setupOlincForm<ComponentType>({
    config: {
      modelPropNameMap: {
        Upload: 'fileList',
        CheckboxGroup: 'model-value',
      },
    },
    defineRules: {
      required: (value, _params, ctx) => {
        if (value === undefined || value === null || value.length === 0) {
          return $t('ui.formRules.required', [ctx.label]);
        }
        return true;
      },
      selectRequired: (value, _params, ctx) => {
        if (value === undefined || value === null) {
          return $t('ui.formRules.selectRequired', [ctx.label]);
        }
        return true;
      },
    },
  });
}

const useOlincForm = useForm<ComponentType>;

export { initSetupOlincForm, useOlincForm, z };

export type OlincFormSchema = FormSchema<ComponentType>;
export type { OlincFormProps };
