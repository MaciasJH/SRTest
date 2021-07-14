<template>
  <div>
    <p>Current count (Vuex):
      <strong>{{ currentCount }}</strong>
      <br>
      <strong>{{ currentMsg }}</strong>
    </p>
    <v-btn class="ma-2" color="secondary" @click.prevent="increment">Increment</v-btn>
    <v-btn class="ma-2" color="accent" @click.prevent="reset">Reset</v-btn>
  </div>
</template>

<script lang="ts">
import { Action, Getter } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
const namespace: string = 'counter';

@Component
export default class Counter extends Vue {
  @Getter('currentCount', { namespace })
  private currentCount!: number;
  @Getter('currentMsg', { namespace })
  private currentMsg!: any;
  @Action('increment', { namespace })
  private incrementCounter: any;
  @Action('reset', { namespace })
  private resetCounter: any;

  private increment() {
    this.incrementCounter();
  }
  private reset() {
    this.resetCounter();
  }
}
</script>
