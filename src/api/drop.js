import $ from 'jquery'
export function drag() {
   $('.DimListContent').bind('dragstart', function(event) {
       var event = event.originalEvent;
       var dataText = $(event.target).attr('data-text');
       event.dataTransfer.setData('text', dataText);
   })
}

export function continuedDrag() {
    $('.DimListContent').bind('drag', function(event){})
}


export function dragEnter(){
    $('#AppCont').bind('dragenter', function(event){
        var event = event.originalEvent;
    })
    $('#AppCont').bind('dragover', function(e){
        e.originalEvent.preventDefault();
    })
}

export function PutDrag(params) {
    $('#AppCont #AppContFixed').bind('drop', function(event){
        var event = event.originalEvent;
        var text = event.dataTransfer.getData('text');
        var str = '';
        switch (text) {
            case 'input':
                str = 
                `
                <li style="width: 100%; height: 40px; background-color: #FFF; border-bottom: 1px solid #696969">
                    <a href="javascript" style="line-height: 40px; color: #BBBBBB;">
                        <div class="el-col el-col-8" style="text-align: center">
                            手动输入框
                        </div> 
                        <div class="el-col el-col-16">
                            请输入内容
                          <i class="el-icon-arrow-right" style="float: right; line-height: 40px; margin-right: 10px; color: rgb(151, 151, 151);"></i>
                        </div>
                    </a>
                </li>
                `
                break;
            case 'select': 
                `
                
                `
            break;
        }
        $(event.target).append(str);
        event.preventDefault();
        event.stopPropagation();
    })
}
