# Ajax-форум для конструктора сайтов uCoz (v.1)

>Внимание: это Beta. Многие очевидные вещи в релиз не вошли.

- Планы: https://docs.google.com/document/d/1GLU1dP_JPfDbN4-BJj_MSLjy0hhzJIcs3nGEO-12d0I/edit?usp=sharing
- Обсуждение: https://kashcheev.usite.pro/forum/12-11-0-17
- Документация: https://kashcheev.usite.pro/forum/12-12-0-17

>Не мёртвое демо: https://kashcheev.usite.pro/

>upd(19.2020): Открыл для себя uApi. Допилив баги начну разработку v.2 форума.

## Важная информация:

На моём сайте форум - это главная страница сайта (переключается в общих настройках сайта).
Таким образом все глобальные блоки (которые дефолтно идут от шаблона выбираемого при создании сайта) распределены под мой шаблон. Пример: глобальный блок "Верхняя часть сайта" - это просто шапка форума.

Возможно, вам не подходит такой вариант. В этом случае вам будет нужно создать новые глобальные блоки под нужные шаблоны, после чего поменять переменные вывода глобальных блоков в шаблоне "Главная страница форума". Или вы можете заменить переменные вывода глобальных блоков на код из шаблона глобального блока.

На моём сайте создан всего один информер и его выводит переменная с соответствующим порядковым номером (1).
Возможно у вас уже созданы другие информеры и по аналогии с глобальными блоками вам будет нужно внести соответствующие изменения кода.

В рамках инструкции по установке форума я не буду вдаваться в детали настроек системы, нужные инструкции уже существуют.

## Установка

### 1. Создаём глобальный блок HUGR, код шаблона.

	<link rel="stylesheet" id="oblique-body-fonts-css" href="//fonts.googleapis.com/css?family=Open+Sans%3A400italic%2C600italic%2C400%2C600&#038;ver=4.4.2" media="all" />
	<link type="text/css" rel="stylesheet" href="/_st/my.css" />
	<style>
	<?ifnot($PAGE_ID$ == 'main')?>.gDivRight {padding: 0 5% 20px;}<?else?>
	#listface .gTableTop {padding: 10px 10%;}
	#chater .gTableTop {padding: 20px 10%;}
	.catLink {pointer-events: none;}<?endif?>
	<?if($PAGE_ID$ == 'forum')?>nav li {height: 33%;}<?else?>
	nav li {height: 50%;}
	<?if($PAGE_ID$ == 'main')?>@media all and (max-width: 960px) {nav li {height: 33%;}}<?endif?><?endif?>
	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1 or $PAGE_ID$ == 'threadpage' or $PAGE_ID$ == 'addreply' or $PAGE_ID$ == 'addthread' or $PAGE_ID$ == 'addpoll' or $PAGE_ID$ == 'postedit')?>.navigationTbl, .forumNamesBar {display: none;}<?endif?>
	<?if($PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum')?>.gTableTop {display: none;}<?endif?>
	</style>
	<script src="//s22.ucoz.net/src/jquery-1.10.2.js"></script>
	<script src="/.s/src/uwnd.js?2"></script>
	<?if($PAGE_ID$ == 'main')?><script src="/js/forum/a.ajax.js"></script><?endif?>

### 2. Код шаблона "Верхняя часть сайта":

	<?if($PAGE_ID$ == 'main' or $PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum' or $PAGE_ID$ == 'threadpage')?>
	<header class="fl base_height <?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1)?>miner <?endif?>p_relative"<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')!= -1 or $PAGE_ID$ == 'addthread')?> style="width: 120px;"<?endif?>>

	<nav class="fl base_height p_relative">
	<ul class="base_height p_relative">
	<?if($PAGE_ID$ == 'main')?><li id="hidden" class="base_width d_none p_relative"><a class="t_center base_height base_width d_block" href="javascript://" title="Лента/Форумы"></a></li><?endif?>
	<?if($PAGE_ID$ == 'forum')?><li class="base_width p_relative"><a id="newtopic" class="t_center base_height base_width d_block" href="/forum/<?substr($URI_ID$, strpos($URI_ID$, '10'))?>-0-0-1-1" title="Создать топик"></a></li><?endif?>
	<li class="base_width p_relative"><a id="logo" class="t_center base_height base_width d_block" href="$HOME_PAGE_LINK$" title="Переваливайте, не задерживайтесь"></a></li>
	<li class="base_width p_relative"><a id="info" class="t_center base_height base_width d_block" href="javascript://" title="О перевале"></a></li>
	</ul>
	</nav>

	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1)?><aside class="Yscroll base_back tr base_height p_absolute">

	<ul class="base_width p_relative" id="navsub">
	<li class="active max fl"><a id="navfeed" class="t_center d_block" href="javascript://"><i class="fa fa-bell-o" aria-hidden="true"></i></a></li>
	<li class="max fr"><a id="navlist" class="t_center d_block" href="javascript://"><i class="fa fa-map-signs" aria-hidden="true"></i></a></li>
	</ul>

	<ul id="feedface" class="Yscroll base_width d_block p_relative">
	$MYINF_1$
	</ul>

	<div id="listface" class="d_none"></div>

	</aside><?endif?>
	</header><?endif?>

### 3. Код шаблона "Нижняя часть сайта"
(тут же обрезан админ бар, т.к. мне он был не нужен, если вам нужен замените <?substr($ADMIN_BAR$, 0, 0)?> на $ADMIN_BAR$):

	<footer id="copyblock" class="back_black base_height p_absolute">
	<p>Копирайты: <br />
	Ваши копирайты <br />
	$POWERED_BY$</p>
	</footer>
	<?substr($ADMIN_BAR$, 0, 0)?>
	<script src="/js/forum/menu-active.js"></script>
	<?if($PAGE_ID$ == 'main')?><script src="/js/forum/sidebar-active.js"></script><?endif?>
	<?if($PAGE_ID$ == 'threadpage')?><script>$("#chater_form").load('/forum/<?substr(substr( $CUR_THREAD_URL$, 6, strrpos($CUR_THREAD_URL$, '-') ), 1, strrpos(substr( $CUR_THREAD_URL$, 6, strrpos($CUR_THREAD_URL$, '-') ), '-') )?>0-1-4 #formbody', function() {
	$.getScript("/js/forum/formloadtopic.js");
	$.getScript("/js/forum/del.js");
	});
	</script><?endif?>

### 4. Код шаблона "Главная страница форума":

	<html class="base_height base_width" lang="ru">
	<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>$MODULE_NAME$ - $SITE_NAME$</title<?'>'?>
	$GLOBAL_HUGR$
	</head<?'>'?>

	<body class="castration base_height base_width">
	$GLOBAL_AHEADER$

	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1)?><div id="chater" class="maxer fr p_relative" style="height: calc(100% - 101px);"><?endif?>
	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')!= -1)?><div class="base_height fr p_relative" style="width: calc(100% - 120px);">
	<section id="category" class="Yscroll white_back base_height base_width p_relative"><?endif?>
	<?if($PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum')?><div class="base_height fr p_relative" style="width: calc(100% - 120px);">
	<section id="sections" class="Yscroll white_back base_height base_width p_relative"><?endif?>
	<?if($PAGE_ID$ == 'threadpage')?><div class="fr p_relative" style="height: calc(100% - 101px); width: calc(100% - 120px);">
	<section id="topicbody" class="Yscroll white_back base_height base_width p_relative"><?endif?>
	<?if($PAGE_ID$ == 'addreply' or $PAGE_ID$ == 'addthread' or $PAGE_ID$ == 'addpoll' or $PAGE_ID$ == 'postedit')?><div id="formbody" class="base_height base_width p_relative"><?endif?>
	<?if($PAGE_ID$ == 'main' or $PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')!= -1 or $PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum' or $PAGE_ID$ == 'threadpage' or $PAGE_ID$ == 'addreply' or $PAGE_ID$ == 'addthread' or $PAGE_ID$ == 'addpoll' or $PAGE_ID$ == 'postedit')?><?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1)?><noscript><?endif?><?if($PAGE_ID$ == 'threadpage')?><!--<?endif?>$BODY$<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1)?></noscript><?endif?><?if($PAGE_ID$ == 'threadpage')?>--><?endif?><?endif?>
	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')!= -1 or $PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum')?></section><?endif?>
	<?if($PAGE_ID$ == 'main' or $PAGE_ID$ == 'category' or $PAGE_ID$ == 'forum' or $PAGE_ID$ == 'threadpage' or $PAGE_ID$ == 'addreply' or $PAGE_ID$ == 'addthread' or $PAGE_ID$ == 'addpoll' or $PAGE_ID$ == 'postedit')?></div><?endif?>
	<?if($PAGE_ID$ == 'main' && strrpos($REQUEST_URI$, 'category')== -1 or $PAGE_ID$ == 'threadpage')?><div id="chater_form" class="<?if($PAGE_ID$ == 'main')?>maxer <?endif?>fr p_relative" style="height: 101px;<?if($PAGE_ID$ == 'threadpage')?> width: calc(100% - 120px);<?endif?>"></div><?endif?>

	$GLOBAL_BFOOTER$

	</body>
	</html>

### 5. Код шаблона "Вид материалов" модуля форум:

	--><?ifnot($EDIT_URL$ or $EDIT_URL$ && $GID$ == '4')?><div class="humane_castration base_back fl d_block p_relative" id="post$ID$">

	<div class="castration white_back">
	<a class="cover base_height base_width d_block" style="background-image: url(<?if($AVATAR_URL$)?>$AVATAR_URL$<?else?>/img/TMNT_Michelangelo_13827.jpg<?endif?>);" href="$PROFILE_URL$" title="$USERNAME$"></a>
	</div>

	<div class="p_relative">
	$MESSAGE$
	</div><?else?>
	<div class="humane_castration back_0176ff fr d_block p_relative" id="post$ID$">

	<div class="p_relative">
	$MESSAGE$<?if($EDIT_URL$ or $DELETE_URL$)?> <br /><?endif?>
	<?if($EDIT_URL$)?><a href="$EDIT_URL$"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a><?endif?>
	<?if($DELETE_URL$)?><a onClick="pdel($ID$, 0); return false;" href="<?substr(substr($NUMBER$, strpos($NUMBER$, 'age') +7), 0, -41)?>"><i class="fa fa-trash-o" aria-hidden="true"></i></a><?endif?>
	</div><?endif?>

	<?if($LAST_ON_PAGE$)?></div>
	</section><!--<?else?></div><!--<?endif?>

### 6. Код шаблона "Форма добавления сообщения:

	<section class="castration center base_height p_relative">

	<?if($ERROR$)?>$ERROR$<?endif?>

	<?if($_THREAD_NAME$)?><p>Thread name: <br />
	$_THREAD_NAME$
	</p>
	<p>Thread description: <br />
	$_THREAD_DESCR$
	</p><?endif?>
	<?if($_POLL_QUESTION$)?><p>Poll question: <br />
	$_POLL_QUESTION$
	</p>
	<p>Poll items: <br />
	<span class="pollHelp">Enter one answer per line. Maximum <b>10</b> answers.</span> <br />
	$_POLL_ANSWERS$ <br />
	Poll options: <br />
	$_POLL_ONLY_OPT$ <br />
	<label for="pollonly">Poll only (no answers allowed in thread)</label> <br />
	$_POLL_MULTI_OPT$ <br />
	<label for="pollmulty">Enable possibility to choose several answers</label> <br />
	$_POLL_PERIOD_OPT$ Poll period (0 - no limit)
	</p><?endif?>

	<div class="base_width p_relative" style="height: 100px;">

	$_MESSAGE$

	<div class="back_white base_height fr p_relative">
	<button id="frF16" class="fa-share fa p_absolute postSubmit" name="sbm"></button>
	</div>

	</div>
	</section>

### 7. Код шаблона "Список категорий/форумов":

	<tr>
	<td>
	<a id="typesection" class="white_back p_relative container" href="$FORUM_URL$" title="<?if($NEW_MESSAGES$)?>Есть новые сообщения<?else?>Нет новых сообщений<?endif?>">
	<div class="castration d_block p_absolute f_status_icon">
	<img class="base_width d_block" src="<?if($NEW_MESSAGES$)?>$ICON_NEW$<?else?>$ICON_NONEW$<?endif?>" />
	</div>
	<div class="base_height fr p_relative" style="width: calc(100% - 30px);">
	<p>$FORUM_TITLE$<?if($FORUM_DESCRIPTION$)?> ($FORUM_DESCRIPTION$)<?endif?></p>
	</div> </a>
	</td> </tr>

### 8. Код шаблона "Список тем":

	<td>
	<div class="white_back p_relative container" href="$FORUM_URL$" title="<?if($NEW_MESSAGES$)?>Есть новые сообщения<?else?>Нет новых сообщений<?endif?>">
	<div class="base_height base_width p_relative">
	<p><a id="typetopic" href="$LAST_POST_LINK$">$THREAD_TITLE$<?if(THREAD_DESCRIPTION)?> ($THREAD_DESCRIPTION$)<?endif?></a><?if($EDIT_BUTTON$)?> <br />
	$EDIT_BUTTON$<?endif?><?if($DELETE_BUTTON$)?>$DELETE_BUTTON$<?endif?></p>
	</div> </div>
	</td>

### 9. Создаём информер.

Скелет моего информера:
>New topics
>Последние обновленные темы
>Количество материалов - 10 (больше ставить не нужно, т.к. информер подхватывает через Get-запрос аватар пользователя, который оставил сообщение). Как известно uCoz блокирует (на 2 часа) IP пользователей, которые шлют на сервер большое количество GET-запросов.

###### Шаблон информера:

	<li class="white_back p_relative container" id="topicfeed-<?substr($THREAD_URL$, strrpos($THREAD_URL$, '/')+1)?>">
	<div id="f_ava-<?substr($THREAD_URL$, strrpos($THREAD_URL$, '/')+1)?>" class="castration d_block p_absolute"></div>
	<div class="base_height fr p_relative" style="width: calc(100% - 30px);">
	<p>Новый пост в топике "$THREAD_TITLE$" от $POST_USER$</p>
	</div>
	</li>

	<script>
	$('#f_ava-<?substr($THREAD_URL$, strrpos($THREAD_URL$, '/')+1)?>').load('<?substr($POST_USER$, 61, 20)?> #ava_get');
	$("#topicfeed-<?substr($THREAD_URL$, strrpos($THREAD_URL$, '/')+1)?>").click(function() {
	$("#chater_form").load('/forum/<?substr(substr( $THREAD_URL$, 6, strrpos($THREAD_URL$, '-') ), 1, strrpos(substr( $THREAD_URL$, 6, strrpos($THREAD_URL$, '-') ), '-') )?>0-1-4 #formbody', function() {
	$.getScript("/js/forum/formload.js");
	$.getScript("/js/forum/del.js");
	});
	$("#chater").load('$LAST_POST_URL$#$NUMBER$ #topicbody').css("height", "calc(100% - 120px)");
	$('[id^="topicfeed-"]').removeClass('active');
	$(this).addClass('active');
	});
	</script>

###### 10. В файловом менеджере создайте каталог css. Внутри создайте forum. В него залейте все css-стили.
В файловом менеджере создайте каталог js. Внутри создайте forum. В него залейте все js-скрипты.

>Обращаю внимание на файл стилей style.css . Дефолтно его содержимое должно быть в шаблоне "Таблица стилей (CSS)". Однако вы можете подключить его напрямую в шаблон "HUGR" заменив ссылку: /_st/my.css на /css/forum/style.css

###### 11. В шаблоне задействованы иконки: https://fontawesome.ru/all-icons/

Предполагается, что в файловом менеджере вы создате каталог font, а в него зальете стили font-awesome.min.css и все файлы шрифтов в количестве 5 штук.

###### 12. Назначение файлов стилей и установка лого:

Насчёт style я всё объяснил.

@import url('/css/forum/normalize.css'); - сброс стилей.
@import url('/css/forum/skeleton.css'); - что-то типа фреймворка + некоторые базовые формы.
@import url('/css/forum/theme.css'); - цвета.
@import url('/css/forum/u.ajax.css'); - стиль окошек uCoz.
@import url('/css/forum/media.q.css'); - адаптивные запросы.
@import url('/font/font-awesome.min.css'); - иконки Font Awesome.

URL файла логотипа нужно устанавливать в файле theme.css, а именно:

	#logo:before {
	content: 'ВАШ_URL';
	background-image: url(https://kashcheev.usite.pro/img/logo.png);
	}

Установку можно считать завершённой.
