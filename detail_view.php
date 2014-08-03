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
            	<h1>Categories</h1>
                <ul>
                <ul>
                    <li><a href="novels.php">소설</a></li>
                    <li><a href="liberal.php">인문</a></li>
                    <li><a href="religion.php">종교</a></li>
                    <li><a href="sports.php">스포츠</a></li>
                    <li><a href="engineering.php">공학</a></li>
            	</ul>
            	</ul>
            </div>
			<div class="templatemo_content_left_section">

            </div>
            

        </div> <!-- end of content left -->
        
        <div id="templatemo_content_right">
        <?php
        	echo '<div class="templatemo_product_box">';
			echo "<h1>{$_POST['title']}</h1>";
   	      	echo '<img src="images/8962181622.jpg" alt="image" />';
            echo '<div class="product_info">';
            echo '<p>구매 하려면 구매하기 버튼을 누르세요.</p>';
            echo '<div class="buy_now_button"><a href="#">';
            echo '<form action="order.php" method="POST">';
			            echo "<input type=\"hidden\" name=\"author_name\" value=\"{$_POST['author_name']}\" />";
			            echo "<input type=\"hidden\" name=\"publisher_name\" value=\"{$_POST['publisher_name']}\" />";
			            echo "<input type=\"hidden\" name=\"category\" value=\"{$_POST['category']}\" />";
			            echo "<input type=\"hidden\" name=\"stock\" value=\"{$_POST['stock']}\" />";
			            echo "<input type=\"hidden\" name=\"ISBN\" value=\"{$_POST['ISBN']}\" />";
			            echo "<input type=\"hidden\" name=\"comment\" value=\"{$_POST['comment']}\" />";
			            echo "<input type=\"hidden\" name=\"title\" value=\"{$_POST['title']}\" />";
            			echo "<input type=\"submit\" value=\"구매하기\" />";
 			echo '</form>';
 		?>
                    </a></div>
                    <div class="detail_button"><a href="subpage.html">Detail</a></div>
                </div>
                <div class="cleaner">&nbsp;</div>
            </div>
            
            <div class="cleaner_with_width">&nbsp;</div>
            
            <div class="templatemo_product_box">
            <?php
            	echo '<h3></h3>';
            	echo '<table>';
				echo '<tr>';
				echo '<th>';
				echo '<h3>저자 :</h3>';
				echo '</th>';
				echo "<td><h3>{$_POST['author_name']}</h3></td>";
				echo '</tr>';
				echo '<tr>';
				echo '<th>';
				echo '<h3>출판사 :</h3>';
				echo '</th>';
				echo "<td><h3>{$_POST['publisher_name']}</h3></td>";
				echo '</tr>';
				echo '<tr>';
				echo '<th>';
				echo '<h3>분류 :</h3>';
				echo '</th>';
				echo "<td><h3>{$_POST['category']}</h3></td>";
				echo '</tr>';
				echo '<tr>';
				echo '<th>';
				echo '<h3>재고 :</h3>';
				echo '</th>';
				echo "<td><h3>{$_POST['stock']}</h3></td>";
				echo '</tr>';
				echo '<tr>';
				echo '<th>';
				echo '<h3>ISBN :</h3>';
				echo '</th>';
				echo "<td><h3>{$_POST['ISBN']}</h3></td>";
				echo '</tr>';
				echo '</table>';
			?>
                <div class="product_info">

                </div>
                <div class="cleaner">&nbsp;</div>
            </div>
            
            <div class="cleaner_with_height">&nbsp;</div>
            
            <h3> 상세설명 </h3>
            <?php
            echo '<p>';
            echo "{$_POST['comment']}";
            echo '</p>';
            ?>
            
            <div class="cleaner_with_height">&nbsp;</div>
            
            
        </div> <!-- end of content right -->
    
    	<div class="cleaner_with_height">&nbsp;</div>
    </div> <!-- end of content -->
    
    
    <!-- end of footer -->
<!--  Free CSS Template www.templatemo.com -->
</div> <!-- end of container -->
</body>
</html>