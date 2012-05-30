(function($, global){
  $(function() {
    var last_commit_url = "https://api.github.com/repos/codeimpossible/codeimpossible.github.com/commits?per_page=1&page=1";
    
    global.renderCommitSha = function(json) {
      var commit = json.data[0];
      var sha = commit.sha;
      var commit_url = commit.url;
      var message = commit.commit.message.replace(/\r\n/ig, '');
      var $html = $('<a />', { href: commit_url, text: sha, title: message, target: "_blank" });
      
      $html.appendTo('p.licence');
    };
    
    var html = "<scr" + "ipt src='" + last_commit_url + "&callback=renderCommitSha'></scr" + "ipt>"; 
    
    $('body').append("<br /><br />" + html);
  });
})(jQuery, window);