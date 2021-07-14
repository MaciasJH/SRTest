<template>
  <v-app>

    <v-navigation-drawer persistent color="primary" :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" white></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :clipped-left="clipped" color="primary" white src="./assets/BoschSupergraphic.png">
      
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          height="6%"
          style="position:absolute;bottom:0px"
        ></v-img>
      </template>
      
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn class="d-none d-lg-flex" icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn class="d-none d-lg-flex" icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>| {{ username }} |</v-toolbar-title>
      <v-img src="./assets/BoschLogo.png" style="margin-left:20px" max-height="120px" max-width="100px" contain></v-img>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer app>
      <span>&nbsp;Robert Bosch RBEI&nbsp;&copy;&nbsp;2021</span>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Username } from './models/Username';

@Component({
  components: { HelloWorld },
})
export default class App extends Vue {
  private clipped: boolean = true;
  private drawer: boolean = true;
  private miniVariant: boolean = false;
  private right: boolean = true;
  private title: string = 'ASP.NET Core Vue Starter';
  private items = [
    { title: 'Home', icon: 'home', link: '/' },
    { title: 'Counter', icon: 'touch_app', link: '/counter' },
    { title: 'Fetch data', icon: 'get_app', link: '/fetch-data' },
    { title: 'Grid', icon: 'mdi-grid', link: '/grid' },
    { title: 'Treeview', icon: 'mdi-tree', link: '/treeview'}
  ];
  private user: any = [];
  private username: string = "";
  private async fetchUsername() {
      const response = await this.$axios.get<Username>('api/User');
      let tempUser = response.data;
      this.user = tempUser;
      this.username = tempUser.username;
  };
  async created(){
    await this.fetchUsername();
  }   
}
</script>

