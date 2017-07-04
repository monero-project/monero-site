---
layout: error
title: "Error 404, Page Not Found"
---

<link rel="stylesheet" href="/404/css/main.css" type="text/css" media="screen, projection" />
<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="/404/css/ie7.css" />
<![endif]-->

<div id="wrapper">
	<div class="graphic">
		<img src="/404/images/404.png" alt="404" />
	</div>

	<div class="top-left">
			<div class="not-found-text">
				<h1 class="not-found-text">Oh no, we couldn't find anything for that link!</h1>
			</div>
	</div>

	<div class="planet">
		<div class="dog-wrapper">
			<div class="dog"></div>
			<div class="dog-bubble"></div>

			<div class="bubble-options">
				{% for data_talk in site.data.dogtalk %}
				<p class="dog-bubble">
					{{ data_talk.bubble }}
				</p>
				{% endfor %}
			</div>
		</div>

		<img src="/404/images/planet.png" alt="planet" />
	</div>

</div>