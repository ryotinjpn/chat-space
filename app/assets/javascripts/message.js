$(function(){
  function buildHTML(message){
    if ( message.imag ) {
      let html = `<div class="ChatMessage__List">
                    <div class="ChatMessage__NameDate">
                      <div class="ChatMessage__Name">
                        ${message.name}
                      </div>
                      <div class="ChatMessage__Date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="ChatMessage__Comment">
                      <p class="Message__content">
                        ${message.body}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                 </div>`
                 return html;
    } else {
      let html = `<div class="ChatMessage__List">
                    <div class="ChatMessage__NameDate">
                      <div class="ChatMessage__Name">
                        ${message.name}
                      </div>
                      <div class="ChatMessage__Date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="ChatMessage__Comment">
                      <p class="Message__content">
                        ${message.body}
                      </p>
                    </div>
                  </div>`
                  return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.ChatMessage').append(html);
      $('.ChatMessage').animate({ scrollTop: $('.ChatMessage')[0].scrollHeight});
      $('form')[0].reset();
    })
  });
});