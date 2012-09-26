(function($, global){
  $(function() {
    var repo = "codeimpossible/codeimpossible.github.com";
    var last_commit_url = "https://api.github.com/repos/" + repo + "/commits?per_page=1&page=1";

    global.renderCommitSha = function(json) {
      var commit = json.data[0];

      var sha = commit.sha;
      var commit_url = "https://github.com/"  + repo + "/commit/" + sha;
      var message = commit.commit.message.replace(/\r\n/ig, '');
      var $html = $('<a />', { href: commit_url, text: sha.substr(0,8), title: message, target: "_blank" });
      var $wrapper = $('<span />');

      $wrapper.append("&nbsp;Version:&nbsp;");

      $html.appendTo($wrapper);
      $wrapper.appendTo('p.license');
    };

    var html = "<scr" + "ipt src='" + last_commit_url + "&callback=renderCommitSha'></scr" + "ipt>";

    $('body').append(html);
  });
})(jQuery, window);
