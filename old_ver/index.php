<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Book Store Template, Free CSS Template, CSS Website Layout</title>
<meta name="keywords" content="Book Store Template, Free CSS Template, CSS Website Layout, CSS, HTML" />
<meta name="description" content="Book Store Template, Free CSS Template, Download CSS Website" />
<link href="templatemo_style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--  Free CSS Templates from www.templatemo.com -->
<div id="templatemo_container">
	<div id="templatemo_menu">
    	<ul>
            <li><a href="index.php" class="current">처음으로</a></li>
            <li><a href="normal_search.php">검색</a></li>
            <li><a href="detail_search.php">상세 검색</a></li>            
			<?php
				session_start();
				if(isset($_SESSION['fail']))
				{
            		if( $_SESSION['fail'] == 0)
            		{
            			echo '<li><a href="logout_index.php">로그아웃</a></li>';
            			echo '<li><a href="#">';
             			echo $_SESSION['name'] . "님, 환영합니다.";
             			echo '</a></li>';
             		}
             		else
             		{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="#">Contact</a></li>';             		
	            	}
             	}
             	else
             	{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="#">Contact</a></li>';   
	            }
			?>
    	</ul>
    </div> <!-- end of menu -->
    

    
    <div id="templatemo_content">
    	
        <div id="templatemo_content_left">
        	<div class="templatemo_content_left_section">
            	<h1>Categories</h1>
                <ul>
                    <li><a href="novels.php">소설</a></li>
                    <li><a href="liberal.php">인문</a></li>
                    <li><a href="religion.php">종교</a></li>
                    <li><a href="sports.php">스포츠</a></li>
                    <li><a href="engineering.php">공학</a></li>
            	</ul>
            </div>
			<div class="templatemo_content_left_section">
            	<h1>Bestsellers</h1>
                <ul>
                    <li><a href="#">Vestibulum ullamcorper</a></li>
                    <li><a href="#">Maece nas metus</a></li>
                    <li><a href="#">In sed risus ac feli</a></li>
                    <li><a href="#">Praesent mattis varius</a></li>
                    <li><a href="#">Maece nas metus</a></li>
                    <li><a href="#">In sed risus ac feli</a></li>
                    <li><a href="http://www.flashmo.com" target="_parent">Flash Templates</a></li>
                    <li><a href="http://www.templatemo.com" target="_parent">CSS Templates</a></li>
                    <li><a href="http://www.webdesignmo.com" target="_parent">Web Design</a></li>
                    <li><a href="http://www.photovaco.com" target="_parent">Free Photos</a></li>
            	</ul>
            </div>
            
            <div class="templatemo_content_left_section">                
                <a href="http://validator.w3.org/check?uri=referer"><img style="border:0;width:88px;height:31px" src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" /></a>
<a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px"  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" /></a>
			</div>
        </div> <!-- end of content left -->
        
        <div id="templatemo_content_right">
<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'macbuntu12';

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}

$sql = 'select * from book b, author a, publisher p where b.author_id = a.author_id and b.publisher_id = p.publisher_id';

mysql_select_db('bookstore');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}

$even = 0;
while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
	$even = $even + 1;
	echo 	'<div class="templatemo_product_box">'.
			"<h1>{$row['title']}</h1>".
			"<img src=\"images/8962181622.jpg\" alt=\"image\" />".
			'<div class="product_info">'.
         	"<p>Etiam luctus. Quisque facilisis suscipit elit. Curabitur...</p>".
         	"<h3>{$row['price']}</h3>".
         	'<div class="buy_now_button"><a href="subpage.html">Buy Now</a></div>'.
         	'<div class="detail_button"><a href="subpage.html">Detail</a></div>'.
         	'</div>'.
         	'<div class="cleaner">&nbsp;</div>'.
            '</div>';
    if($even % 2 == 1)
        echo '<div class="cleaner_with_width">&nbsp;</div>';
    
    if($even % 2 == 0)
    	echo '<div class="cleaner_with_height">&nbsp;</div>';
}
if($even % 2 == 1)
	echo '<div class="cleaner_with_height">&nbsp;</div>';

mysql_close($conn);
?>
    </div> <!-- end of content -->
    
    <div id="templatemo_footer">
    
	       <a href="subpage.html">Home</a> | <a href="subpage.html">Search</a> | <a href="subpage.html">Books</a> | <a href="#">New Releases</a> | <a href="#">FAQs</a> | <a href="#">Contact Us</a><br />
        Copyright © 2048 <a href="#"><strong>Your Company Name</strong></a> | <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a href="http://www.templatemo.com" target="_parent" title="free css templates">Free CSS Templates</a>	</div> 
    <!-- end of footer -->
<!--  Free CSS Template www.templatemo.com -->
</div> <!-- end of container -->
<div align=center>This template  downloaded form <a href='http://all-free-download.com/free-website-templates/'>free website templates</a></div></body>
</html>