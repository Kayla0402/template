<template>
  <div class="home">
<!--    <header-top/>-->
      <h1>==========={{msg}}==========</h1>
<!--    <el-button type="primary">主要按钮</el-button>-->
<!--    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">-->
<!--      <el-table-column type="selection" width="55"></el-table-column>-->
<!--      <el-table-column label="日期" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>-->
<!--      <el-table-column prop="name" label="姓名" width="120"></el-table-column>-->
<!--      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>-->
<!--    </el-table>-->
    <div style="margin-top: 20px">
<!--      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>-->
<!--      <el-button @click="toggleSelection()">取消选择</el-button>-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HeaderTop from '@/components/Header'
export default {
  name: 'Home',
  components: {
    // HeaderTop
  },
  data () {
    return {
      msg: 'home页面',
      testData: 'testData=========',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  },
  watch: {
    testData (nvl, old) {
      // console.log(nvl + '=============nvl')
      // console.log(old + '=============old')
    }
  },
  mounted () {
    // BroadcastChannel 的不支持ie11,谷歌适用性比较好
    // const setChannel = new BroadcastChannel('demos')
    // setChannel.onmessage = e => {
    //   // console.log('接收到消息:', e.data)
    //   this.testData = e.data
    // }
    window.addEventListener('storage', function (e) {
      console.log(8888888888)
      console.log(e.key, e.newValue, e.oldValue)
    })
  }
}
</script>
<style>
  .adapt {
    width: 477px;/*no*/
    height: 180px;
    background: yellow;
    color: royalblue;
  }
</style>
