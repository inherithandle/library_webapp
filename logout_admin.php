<?php
session_start();
if(isset($_SESSION['fail']))
{
  unset($_SESSION['fail']);
  unset($_SESSION['name']);
  unset($_SESSION['id']);
  unset($_SESSION['social_number']);
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>광운대학교 서점</title>
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
				if(isset($_SESSION['fail']))
				{
            		if( $_SESSION['fail'] == 0)
            		{
            			echo '<li><a href="logout_admin.php">로그아웃</a></li>';
            			echo '<li><a href="#">';
						if(isset($_SESSION['name'])) 
             				echo $_SESSION['name'] . "님, 환영합니다.";
             			else
             				echo '관리자님, 환영합니다.';
             			echo '</a></li>';
             		}
             		else
             		{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="#">관리자모드</a></li>';             		
	            	}
             	}
             	else
             	{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="#">관리자모드</a></li>';   
	            }
			?>
    	</ul>
    </div> <!-- end of menu -->
    

    
    <div id="templatemo_content">
    	
        <div id="templatemo_content_left">
        	<div class="templatemo_content_left_section">
            	

            </div>
			<div class="templatemo_content_left_section">

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

$sql = 'select * from book';

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
    
    
    <!-- end of footer -->
<!--  Free CSS Template www.templatemo.com -->
</div> <!-- end of container -->
</body>
</html>