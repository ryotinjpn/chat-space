$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html = `<div class="ChatMessage__List" data-message-id=${message.id}>
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
                      <img class="ChatMessage__Image" src="${message.image}">
                    </div>
                 </div>`
                 return html;
    } else {
      let html = `<div class="ChatMessage__List" data-message-id=${message.id}>
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
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.ChatMessage').append(html);
      $('form')[0].reset();
      $('.ChatMessage').animate({ scrollTop: $('.ChatMessage')[0].scrollHeight});
      $('.Form__Submit').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__Submit').prop("disabled", false);
    });
  });
});