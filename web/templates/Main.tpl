{*
	main.tpl

	Type: standalone template
	Usage: Basic template for pages

	Variables:
		title: page title
		(Optional) keywords: for Meta keywords tag
		(Optional) robots: for Meta robots tag
		(Optional) description: for Meta description tag
		(Optional) author: for Meta author tag

    Blocks:
        vars: for defining Smarty variables at the top of the document
        extraHead: extra content in the head
        content: main content below navigation
        footer: extra script right before </body>, e.g. scripts

    Internal variables:
        siteName: What's in the Title
*}

{$siteName = 'CourseTable'}
{block name=vars}{/block}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{$title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
{if isset($keywords)}<meta name="keywords" content="{$keywords|escape:html}">{/if}
{if isset($description)}<meta name="description" content="{$description|escape:html}">{/if}
{if isset($robots)}<meta name="robots" content="{$robots|escape:html}">{/if}
{if isset($author)}<meta name="author" content="{$author|escape:html}">{/if}

    <!-- Le styles -->
    <link href="/libs/bootstrap-2.3.2/css/bootstrap.css" rel="stylesheet">
    <link href="/libs/fontawesome/css/font-awesome.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <!--
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/libs/bootstrap/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/libs/bootstrap/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/libs/bootstrap/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="/libs/bootstrap/ico/apple-touch-icon-57-precomposed.png">
    -->
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="shortcut icon" href="/favicon.png">

    <!-- analytics -->
    <script async defer data-website-id="c5761971-088c-47ee-911c-2d5429fd651d" src="https://umami.coursetable.com/umami.js"></script>

{block name=extraHead}{/block}

</head>

<body>

{block name=beforeContent}{/block}
{block name=content}{/block}

<!-- Le javascript
        ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.js"></script>
<script src="/libs/bootstrap-2.3.2/js/bootstrap.js"></script>
<script src="/js/fb.js"></script>

{block name=footer}{/block}

{literal}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53419058-1', 'auto');
  ga('send', 'pageview');

</script>
{/literal}

</body>
</html>
