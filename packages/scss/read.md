///  @include b(block) {
///     background: red;
///     @include e(header){
///         font-size: 14px;
///
///         @include m(css) {
///             font-size: 18px;
///         }
///     };
///  }
///  //CSS
///  .block {
///      background: red;
///  }
///  .block__header {
///     font-size: 14px;
///  }
///  .block__header--css {
///     font-size: 18px;
///  }
test
————————————————                   
原文链接：https://blog.csdn.net/Only_ruiwen/article/details/121204227