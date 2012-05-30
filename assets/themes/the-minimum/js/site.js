(function($, global){
  $(function() {
    var last_commit_url = "https://api.github.com/repos/codeimpossible/codeimpossible.github.com/commits?per_page=1&page=1";
    
    global.renderCommitSha = function(json) {
      console.log(json);
      var commit = json.data[0];
      console.log(commit);
      var sha = commit.sha;
      var commit_url = commit.url;
      var message = commit.commit.message;
      var $html = $('<a />', { href: commit_url, text: sha, title: message, target: "_blank" });
      
      $html.appendTo('p.license');
    };
    
    var html = "<scr" + "ipt src='" + last_commit_url + "&callback=renderCommitSha'></scr" + "ipt>"; 
    
    $('body').append(html);
  });
})(jQuery, window);