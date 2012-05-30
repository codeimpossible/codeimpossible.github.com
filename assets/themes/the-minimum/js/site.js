(function($, global){
  $(function() {
    var last_commit_url = "https://api.github.com/repos/codeimpossible/codeimpossible.github.com/commits?per_page=1&page=1";
    
    global.renderCommitSha = function(json) {
      var sha = json.sha;
      var commit_url = json.url;
      var message = json.commit.message;
      var $html = $('<a />', { href: commit_url, text: sha, title: message, target: "_blank" });
      
      $html.appendTo('p.license');
    };
    
    var html = "<scr" + "ipt src='" + last_commit_url + "?callback=renderCommitSha'></scr" + "ipt>"; 
  });
})(jQuery, window);