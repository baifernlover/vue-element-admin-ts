<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon name="language" class="international-icon"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">Español</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';
  import { AppModule } from '@/store/modules/app';
  import i18n from '@/lang';
  import {Message} from 'element-ui';

  export default class LangSelect extends Vue {
    get language() {
      return this.$store.getters.language;
    }

    private handleSetLanguage(lang): void {
      // TODO this 指向为 null?
      console.log('this', this);
      // console.log('lang', lang);
      i18n.locale = lang;
      AppModule.SetLanguage(lang);
      Message({
        message: 'Switch Language Success',
        type: 'success'
      });
    }
  }
</script>

<style scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
    vertical-align: -5px !important;
  }
</style>

