<script setup lang="ts">
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
</script>

<template>
  <ClientOnly>
    <VChart :autoresize="true" class="chart" :option="option" />
    <template #fallback>
      <el-skeleton animated>
        <template #template>
          <el-skeleton-item class="chart" variant="rect" />
        </template>
      </el-skeleton>
    </template>
  </ClientOnly>
  <el-pagination
    :value="1"
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  />
</template>

<style scoped lang="scss">
.chart {
  @apply tw-p-5 tw-h-96;
}
</style>
