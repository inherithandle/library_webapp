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
				session_start();
				if(isset($_SESSION['fail']))
				{
            		if( $_SESSION['fail'] == 0)
            		{
            			echo '<li><a href="logout_index.php">로그아웃</a></li>';
            			echo '<li><a href="#">';
            			if(isset($_SESSION['name'])) // 이거 전체적으로 추가해야된다. 
             				echo $_SESSION['name'] . "님, 환영합니다.";
             			else
             				echo '관리자님, 환영합니다.';
             			echo '</a></li>';
             		}
             		else
             		{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="admin_login.php">관리자모드</a></li>';             		
	            	}
             	}
             	else
             	{
	             		echo '<li><a href="sign_in.php">회원가입</a></li>';
    	         		echo '<li><a href="login.php">로그인</a></li>';
	            		echo '<li><a href="admin_login.php">관리자모드</a></li>';   
	            }
			?>
    	</ul>
    </div> <!-- end of menu -->
    

    
    <div id="templatemo_content">
    	
        <div id="templatemo_content_left">
        	<div class="templatemo_content_left_section">
                <?php

                if(isset($_SESSION['fail']))
	            {

	            	if(isset($_SESSION['admin_id']))
	            	{
            			echo '<h1>기능선택</h1>';
            			echo '<ul>';
            			echo '<li><a href="daily.php">일별 매출액 조회</a></li>';
            			echo '<li><a href="monthly.php">월별 매출액 조회</a></li>';
            			echo '<li><a href="newbook.php">새 책 추가</a></li>';
            			echo '<li><a href="deletebook.php">책 폐기</a></li>';
            			echo '</ul>';
	            	}
	            	else
	            	{
						echo '<h1>Categories</h1>';
                		echo '<ul>';
    	                echo '<li><a href="novels.php">소설</a></li>';
	                    echo '<li><a href="liberal.php">인문</a></li>';
        	            echo '<li><a href="religion.php">종교</a></li>';
    	                echo '<li><a href="sports.php">스포츠</a></li>';
	                    echo '<li><a href="engineering.php">공학</a></li>';         
	                    echo '</ul>';
	            	}
	            }
	            else
	            {
            		echo '<h1>Categories</h1>';
                	echo '<ul>';
                    echo '<li><a href="novels.php">소설</a></li>';
                    echo '<li><a href="liberal.php">인문</a></li>';
                    echo '<li><a href="religion.php">종교</a></li>';
                    echo '<li><a href="sports.php">스포츠</a></li>';
                    echo '<li><a href="engineering.php">공학</a></li>';
            		echo '</ul>';
	            }
                ?>
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
         	"<p>자세한 설명은 보시려면 버튼을 클릭하세요.</p>".
         	"<h3>{$row['price']}</h3>".
         	'<div class="buy_now_button"><a href="#">'.
			'<form action="order.php" method="POST">'.
         	'<input type="hidden" name="title" '.
         	"value=\"{$row['title']}\" />".			
         	'<input type="hidden" name="author_name" '.
         	"value=\"{$row['author_name']}\" />".
         	'<input type="hidden" name="publisher_name" '.
         	"value=\"{$row['publisher_name']}\" />".         	
         	'<input type="hidden" name="category" '.         	
         	"value=\"{$row['category']}\" />".         	
         	'<input type="hidden" name="stock" '.         	
         	"value=\"{$row['stock']}\" />".         	
         	'<input type="hidden" name="ISBN" '.         	
         	"value=\"{$row['ISBN']}\" />".         	         	
         	'<input type="hidden" name="comment" '.         	
         	"value=\"{$row['comment']}\" />".	         	
         	'<input type="submit" value="구매하기" />'.
         	'</form>'.			
         	'</a></div>'.
         	'<div class="detail_button"><a href="#">'.
			'<form action="detail_view.php" method="POST">'.
         	'<input type="hidden" name="title" '.
         	"value=\"{$row['title']}\" />".			
         	'<input type="hidden" name="author_name" '.
         	"value=\"{$row['author_name']}\" />".
         	'<input type="hidden" name="publisher_name" '.
         	"value=\"{$row['publisher_name']}\" />".         	
         	'<input type="hidden" name="category" '.         	
         	"value=\"{$row['category']}\" />".         	
         	'<input type="hidden" name="stock" '.         	
         	"value=\"{$row['stock']}\" />".         	
         	'<input type="hidden" name="ISBN" '.         	
         	"value=\"{$row['ISBN']}\" />".         	         	
         	'<input type="hidden" name="comment" '.         	
         	"value=\"{$row['comment']}\" />".         	         	
         	'<input type="submit" value="자세히 보기" />'.
         	'</form>'.			
         	'</a></div>'.
         	'</div>'.
         	'<div class="cleaner">&nbsp;</div>'.
            '</div>';
            
            /*
			            <input type="hidden" name="author_name" value="3030" />
			            <input type="hidden" name="publisher_name" value="3030" />
			            <input type="hidden" name="category" value="3030" />
			            <input type="hidden" name="stock" value="3030" />
			            <input type="hidden" name="ISBN" value="3030" />
			            <input type="hidden" name="comment" value="3030" />
            			<input type="submit" value="구매하기" />
            */
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