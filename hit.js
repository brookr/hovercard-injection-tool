twttr.templates.hovercard_content = "<div class=\"hovercard-content-inner\"> \
  <div class=\"bd\"> \
    <a href=\"/{{screen_name}}\" class=\"tweet-url profile-pic\"><img class=\"avatar\" src=\"{{avatar_src}}\" width=\"48\" height=\"48\"></a> \
    <div class=\"bio\"> \
      <p class=\"fn-above\">{{full_name}}</p> \
      <p class=\"sn\"><a href=\"/{{screen_name}}\" class=\"screen_name tweet-url screen-name\"><span class='at_symbol'>@</span>{{screen_name}}</a> \
        {{#is_verified}} \
          <img src=\"/images/verified/verified_small.png\"> \
        {{/is_verified}} \
      </p> \
      <p class=\"fn-inline\">{{full_name}}</p> \
      <p class=\"location\"> \
      {{#location}} \
        {{location}} \
      {{/location}} \
 \
      <a href=\"#\" class=\"load-more\">{{_i}}more...{{/i}}</a> \
      </p> \
      <p> \
    </div> \
    <div id=\"HIT\" class=\"description\"> \
      <img src=\"/images/spinner.gif\" /> Loading bonus info... \
      <script type=\"text/javascript\"> \
        $('.hovercard').trigger('HIT_it', '{{screen_name}}') \
      </script> \
    </div> \
    <div class=\"description description-inactive\"> \
      <div class=\"description-inner\"> \
        {{#website_text}}<p><strong>Web:</strong> <a href=\"{{website_url}}\" rel=\"nofollow\" target=\"_blank\">{{website_text}}</a></p>{{/website_text}} \
        {{#description}}<p><strong>Bio:</strong> {{description}}</p>{{/description}} \
        {{#latest_status}}<p class=\"latest_status\"><strong>{{_i}}Latest Tweet:{{/i}}</strong> {{{latest_status}}}</p>{{/latest_status}} \
        <ul class=\"user_stats\"> \
          <li class=\"first\"> \
            <span class=\"stat\">{{tweet_count}}</span> \
            <span class=\"type\">tweets</span> \
          </li> \
          <li> \
            <span class=\"stat\">{{following_count}}</span> \
            <span class=\"type\">following</span> \
          </li> \
          <li {{~lists_count}}class=\"last\"{{/lists_count}}> \
            <span class=\"stat\">{{follower_count}}</span> \
            <span class=\"type\">followers</span> \
          </li> \
          {{#lists_count}} \
          <li class=\"last\"> \
            <span class=\"stat\">{{lists_count}}</span> \
            <span class=\"type\">lists</span> \
          </li> \
          {{/lists_count}} \
        </ul> \
      </div> \
    </div> \
  </div> \
  <div class=\"hovercard-inner-footer\"> \
    {{~is_you}} \
      <div class=\"{{#is_blocking}}blocking {{/is_blocking}} {{~do_you_follow}}not-{{/do_you_follow}}following\"> \
        <div class=\"following-controls\"> \
          <span class=\"is-following\"></span> \
          <span class=\"you-follow-user\">{{_i}}You follow{{/i}}</span> \
 \
          {{#device_updates}} \
            <span title=\"{{_i}}Device Settings{{/i}}\" onclick=\"twttr.HoverCard.followActionHandler(this, {{user_id}}, '{{screen_name}}', {{gets_device_updates}});\" class=\"setting sms-setting sms-setting-{{#gets_device_updates}}not-{{/gets_device_updates}}off\"></span> \
          {{/device_updates}} \
          {{#replies}} \
            <span title=\"{{_i}}Reply Settings{{/i}}\" onclick=\"twttr.HoverCard.followActionHandler(this, {{user_id}}, '{{screen_name}}', {{sees_replies}});\" class=\"setting replies-setting replies-setting-{{#sees_replies}}not-{{/sees_replies}}off\"></span> \
          {{/replies}} \
          {{#retweets}} \
            <span title=\"{{_i}}Retweet Settings{{/i}}\" onclick=\"twttr.HoverCard.followActionHandler(this, {{user_id}}, '{{screen_name}}', {{sees_retweets}});\" class=\"setting shares-setting shares-setting-{{#sees_retweets}}not-{{/sees_retweets}}off\"></span> \
          {{/retweets}} \
        </div> \
        <div class=\"follow-controls\"> \
          <a href=\"/\" class=\"a-btn user\"><i></i>{{_i}}Follow{{/i}}</a> \
        </div> \
      </div> \
    {{/is_you}} \
    {{#is_you}} \
      <div class=\"is-you\">{{_i}}That’s You!{{/i}}</div> \
    {{/is_you}} \
    {{#is_logged_in}} \
      <div class=\"action-dropdowns\"> \
        <!-- <a class=\"a-btn user list-menu\"><i></i></a> --> \
        {{~is_you}} \
          <a class=\"a-btn user action-menu\" onclick=\"twttr.HoverCard.toggleActionMenu(this)\"><i></i><span>*</span></a> \
        {{/is_you}} \
      </div> \
    {{/is_logged_in}} \
  </div> \
</div> \
"