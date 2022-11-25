(function () {
  // 左边部分模块2可视化大屏
  var choseTab = document.querySelectorAll('.choseTab');
  var showTab = document.querySelectorAll('.showTab');
  for (var i = 0; i < choseTab.length; i++) {
    choseTab[i].setAttribute('index', i)
    choseTab[i].onclick = function () {
      var index = this.getAttribute('index');
      console.log(index);
      for (var j = 0; j < choseTab.length; j++) {
        choseTab[j].classList.remove('active');
        choseTab[index].classList.add('active');
      }
      for (var k = 0; k < showTab.length; k++) {
        showTab[k].style.display = 'none';
        showTab[index].style.display = 'block';
      }
    }
  }
})();

(function () {
  //获取元素作为拉丁格尔图的容器
  var pieChart = echarts.init(document.querySelector('.pie'))
  var option = {
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

    // title: {
    //   text: '点位分布统计',
    //   textStyle: {
    //     color: 'white',
    //     fontSize: '16',
    //     fontWeight: '500'

    //   },
    //   top: '10',
    //   left: '15'

    // },
    // legend: {
    //     top: 'bottom'
    // },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         mark: { show: true },
    //         dataView: { show: true, readOnly: false },
    //         restore: { show: true },
    //         saveAsImage: { show: true }
    //     }
    // },
    series: [
      {
        name: '点位分布图',
        type: 'pie',
        radius: [5, 70],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        }, label: {
          fontSize: 10
        },
        labelLine: {
          length: 3,
          length2: 6
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '河南' }
        ]
      }
    ]
  };
  pieChart.setOption(option);
  window.addEventListener('load', function () {
    pieChart.resize();
  })
  window.addEventListener('resize', function () {
    pieChart.resize();
  })
})();



(function () {
  // 获取元素作为柱形图的容器
  var barChart = echarts.init(document.querySelector('.bar'))
  var option = {
    // title: {
    //   text: '全国用户总量统计',
    //   textStyle: {
    //     color: 'white',
    //     fontSize: '16',
    //     fontWeight: '500'

    //   },
    //   top: '10',
    //   left: '15'

    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0%',
      top: '8%',
      containLabel: true,
      show: true,
      borderColor: '#68E2F1',
    },
    xAxis: {
      type: 'category',
      data: ['郑州', '', '北京', '', '合肥', '', '......', '', '杭州', '', '济南', '', '重庆'],
      axisLine: {
        lineStyle: {
          color: '#68E2F1'
        }
      },
      axisTick: {
        show: false,
      },
      nameTextStyle: {
        color: '#68E2F1',
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#777'
        }
      },
      nameTextStyle: {
        color: '#68E2F1',
        padding: [0, 0, 0, 50]
      },
      splitLine: {
        lineStyle: {
          color: '#68E2F1'
        }
      },
      axisLabel: {
        color: '#68E2F1'
      }
    },
    series: [
      {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#71F5F7' },
            { offset: 0.5, color: '#50B0E1' },
            { offset: 1, color: '#2C62CC' }
          ])
        },
        data: [
          2100,
          1900,
          1640,
          1520,
          1460,
          {
            value: 1200,
            itemStyle: {
              color: '#2B3F62'
            }
          },
          {
            value: 1200,
            itemStyle: {
              color: '#2B3F62'
            }
          }, {
            value: 1200,
            itemStyle: {
              color: '#2B3F62'
            }
          }, 900, 800, 700, 600, 500, 200
        ],
        type: 'bar'
      }
    ]
  };
  barChart.setOption(option);
  window.addEventListener('load', function () {
    barChart.resize();
  });
  window.addEventListener('resize', function () {
    barChart.resize();
  })
})();



(function () {
  /* 模块六 自动切换 */
  var as = document.querySelector('.filter').querySelectorAll('a');
  var orderData = document.querySelectorAll('.orderData');
  for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('index', i);
    as[i].onclick = function () {
      var index = this.getAttribute('index');
      // console.log(index);
      for (var j = 0; j < as.length; j++) {
        as[j].classList.remove('active');
        as[index].classList.add('active');
      }
      for (var k = 0; k < orderData.length; k++) {
        orderData[k].classList.add('orderDataHidden');
        orderData[index].classList.remove('orderDataHidden');
      }
    }
  };
  var content6 = document.querySelector('.content6');

  function auto() {

    // 自动
    var timer = null;
    var ind = 0;
    timer = setInterval(function () {
      ind++;
      if (ind >= orderData.length) {
        ind = 0;
      }
      as[ind].click();
    }, 1500);

    // 进入到第六模块自动切换暂停
    // 找到第六模块元素
    content6.onmouseenter = function () {
      clearInterval(timer);
    };
  };
  auto();

  content6.onmouseleave = function () {
    auto();
  }
})();



(function () {
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  }
  /* 模块七自动切换 */
  var lineChart = echarts.init(document.querySelector('.linec'));
  var option = {
    // title: {
    //   text: '销售额统计',
    //   textStyle: {
    //     color: 'white',
    //     fontSize: '16',
    //     fontWeight: '500'

    //   },
    //   top: '10',
    //   left: '15'

    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['预期销售额', '实际销售额'],
      top: '3',
      right: '40',
      textStyle: {
        color: '#6395EC',
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '1%',
      top: '20%',
      containLabel: true,
      show: true,
      borderColor: '#555',
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {}
    //     }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '', '3月', '', '5月', '', '7月', '', '9月', '', '11月', '',],
      axisLine: {
        lineStyle: {
          color: '#6395EC'
        }
      },
      axisTick: {
        show: false,
      },
      name: 'chen',
      nameTextStyle: {
        color: '#6395EC',
      }
    },
    yAxis: {
      type: 'value',
      name: '单位：万',
      nameLocation: 'end',
      nameGap: 5,
      axisLine: {
        lineStyle: {
          color: '#777'
        }
      },
      nameTextStyle: {
        color: '#6395EC',
        padding: [0, 0, 0, 50]
      },
      splitLine: {
        lineStyle: {
          color: '#555'
        }
      },
      axisLabel: {
        color: '#6395EC'
      }
    },
    series: [
      {
        name: '预期销售额',
        type: 'line',
        smooth: true,
        color: 'aqua',
        stack: 'Total',
        data: data.year[0],
      },
      {
        name: '实际销售额',
        type: 'line',
        smooth: true,
        color: 'rgb(211, 72, 72)',
        stack: 'Total',
        data: data.year[1],
      },
    ]
  };
  lineChart.setOption(option);
  window.addEventListener('load', function () {
    lineChart.resize();
  });
  window.addEventListener('resize', function () {
    lineChart.resize();
  });


  var as = document.querySelector('.caption').querySelectorAll('a');
  for (var i = 0; i < as.length; i++) {
    as[i].setAttribute('index', i);
    as[i].onclick = function () {
      var index = this.getAttribute('index');
      for (var j = 0; j < as.length; j++) {
        as[j].classList.remove('active');
        as[index].classList.add('active');
      }
      var dataTime = this.getAttribute('data-time');
      option.series[0].data = data[dataTime][0];
      option.series[1].data = data[dataTime][1];
      lineChart.setOption(option);
    }
  };

  var content7 = document.querySelector('.content7');
  var timeTab2 = document.querySelectorAll('.timeTab');
  function auto() {

    // 自动
    var timer = null;
    var ind = 0;
    timer = setInterval(function () {
      ind++;
      if (ind >= timeTab2.length) {
        ind = 0;
      }
      as[ind].click();
    }, 1500);

    // 进入到第六模块自动切换暂停
    // 找到第六模块元素
    content7.onmouseenter = function () {
      clearInterval(timer);
    };
  };
  auto();

  content7.onmouseleave = function () {
    auto();
  }
})();






(function () {
  var radar = echarts.init(document.querySelector('.radar'));
  // Schema:
  // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
  const dataBJ = [
    [55, 9, 56, 0.46, 18, 6, 1],
  ];

  const lineStyle = {
    width: 1,
    opacity: 0.5
  };
  var option = {
    radar: {
      nameGap: 10,
      radius: '60%',
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 4,
      axisName: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },
      splitArea: {
        show: false,
      },
      tooltip: {
        show: true,
        position: ['60%', '0%'],
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)'
        }
      },

    },
    series: [
      {
        type: 'radar',
        lineStyle: {
          normal: {
            color: '#fff',
          }
        },
        data: [[90, 100, 56, 11, 34]],
        symbol: 'circle',
        symbolSize: 5,
        symbolColor: 'white',
        itemStyle: {
          color: 'white'
        },
        label: {
          show: true,
          color: 'white',
          fontSize: 10,
          lineHeight: 1,
        },
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)',
        },
      },
    ]
  };

  radar.setOption(option);
  window.addEventListener('load', function () {
    radar.resize();
  });
  window.addEventListener('resize', function () {
    radar.resize();
  });
})();