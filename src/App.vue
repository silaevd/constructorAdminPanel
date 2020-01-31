<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  /*Base*/
  * {
    box-sizing: border-box;
  }
  body, html {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    background: #f6f8fa;
    margin: 0 auto;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    /*flex-wrap: wrap;*/
  }
  .block {
    width: 100%;
    background: white;
    border: 1px solid #d2d8de;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .block__header {
    font-size: 18px;
    background: #f7f7f7;
    padding: 10px 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom: 1px solid #d2d8de;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .block__body {
    background: white;
    padding: 10px 15px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    max-width: 600px;
    margin: 0 auto;
  }
  .form .inputGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 15px 0;
  }
  .form .inputGroup label {
    text-align: right;
    width: calc(35% - 10px);
    margin-right: 20px;
  }
  .form .inputGroup input, .form .inputGroup select {
    width: calc(65% - 10px);
    max-width: 300px;
    height: 30px;
    padding: 2px 10px;
    border: 1px solid #d2d8de;
    border-radius: 4px;
    outline: none;
    /*-webkit-appearance: none;*/
  }
  .form .inputGroup span {
    width: calc(65% - 10px);
    max-width: 300px;
  }
  .form .btn {
    margin: 15px 0 0;
  }
  .form .block {
    border: none;
  }

  .btn {
    outline: none;
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #ffffff;
    border-radius: 4px;
  }
  .btn i {
    margin-right: 4px;
  }
  .btn:hover {
    cursor: pointer;
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    transition-duration: 0.3s;
    transition-property: box-shadow;
  }
  .btn-blue {
    background: #017bff;
  }
  .btn-aqua {
    background: #16a2b8;
  }
  .btn-green {
    background: #28a745;
  }
  .btn-red {
    background: #dd3545;
  }
  .btn-link a {
    color: white;
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #077fff;
    margin: 5px;
    transition: 500ms;
  }
  .link:hover {
    text-decoration: underline;
    cursor: pointer;
    transition: 500ms;
  }

  aside {
    display: inline-block;
    width: 100%;
    min-height: 100vh;
    max-width: 300px;
    /*background: #5eb5e0;*/
    margin-right: 15px;
    padding: 0 10px;
  }
  aside .block__body .link {
    display: block;
  }
  main {
    display: inline-block;
    min-height: 100vh;
    flex-grow: 1;
    padding-right: 10px;
  }
  /*Login*/
  .loginWrapper {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  .loginForm {
    width: 100%;
    max-width: 400px;
  }

  /*Header*/
  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 3px 5px -3px rgba(204,204,204,1);
  }
  .logo {
    font-size: 20px;
  }

  table{
    width: 100%;
    border-collapse:collapse;
    border-spacing:0;
    margin: 10px 0;
  }
  table, td, th {
    /*border: 1px solid #595959;*/
    padding: 10px;
  }
  th {
    text-align: center;
    border-top: 1px solid #d2d8de;
    border-bottom: 2px solid #d2d8de;
  }
  tr {
    border-top: 1px solid #d2d8de;
    text-align: center;
    /*border-bottom: 1px solid #d2d8de;*/
  }

  .toolsBlock {
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tableBlock {
    width: 100%;
    min-width: 741px;
    margin: 15px 0;
    overflow: auto;
  }

  .searchBlock {
    position: relative;
    display: inline-block;
  }
  .searchBlock input {
    height: 30px;
    padding: 2px 10px;
    border: 1px solid #d2d8de;
    border-radius: 4px;
    outline: none;
  }
  .searchBlock .icon-btn {
    color: white;
    height: 30px;
    width: 30px;
    background: #6c747d;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0 4px 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tableActions {
    display: flex;
    justify-content: space-around;
  }
  /*fsdfsdfsdfs*/
  .form .inputGroup input[type="checkbox"]{
    -webkit-appearance:none;
    width:50px;
    height:22px;
    border:1px solid #d2d8de;
    border-radius:2px;
    background:#ebebeb;
    position:relative;
    display:inline-block;
    overflow:hidden;
    vertical-align:middle;
    transition: background 0.3s;
    box-sizing:border-box;
    outline: none;
    margin: 0;
  }
  .form .inputGroup input[type="checkbox"]:hover {
    cursor: pointer;
  }
  .form .inputGroup input[type="checkbox"]:after{
    content:'';
    position:absolute;
    top:-1px;
    left:-1px;
    width:22px;
    height:21px;
    background:white;
    border:1px solid #d2d8de;
    border-radius:2px;
    transition: left 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  .form .inputGroup input[type="checkbox"]:checked{
    background:#28a745;
    border-color:#28a745;
  }
  .form .inputGroup input[type="checkbox"]:checked:after{
    left:25px;
    border-color:#d2d8de;
    box-shadow: -2px 0px 4px 0px rgba(50, 50, 50, 0.20);
  }
  .form .inputGroup input[type="checkbox"]:not(:checked):not(:disabled):after{
    left:-1px;
  }

  .fieldRemoveBtn {
    display: inline-block;
    margin-left: 15px;
  }
  .fieldRemoveBtn i {
    color: red;
    font-size: 18px;
  }

  .addFieldBtn {
    font-size: 23px;
    color: #28a745;
  }
  .addFieldBtn:hover {
    cursor: pointer;
  }

</style>
