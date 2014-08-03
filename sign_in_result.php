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
                    <li><a href="novels.php">소설</a></li>
                    <li><a href="liberal.php">인문</a></li>
                    <li><a href="religion.php">종교</a></li>
                    <li><a href="sports.php">스포츠</a></li>
                    <li><a href="engineering.php">공학</a></li>
            	</ul>
            </div>
			<div class="templatemo_content_left_section">

            </div>
            

        </div> <!-- end of content left -->
        
        <div id="templatemo_content_right">
        	<div id="main_contents">
        	<h2></h2><p></p>
        	<?php
        		$dbhost = 'localhost';
				$dbuser = 'root';
				$dbpass = 'macbuntu12';

				$conn = mysql_connect($dbhost, $dbuser, $dbpass);
				if(! $conn )
				{
					die('Could not connect: ' . mysql_error());
				}

				$sql = "insert into customer(customer_id, customer_name, password, social_number, phone_number, email, address, mileage) values (";
				$sql .= "'{$_POST['customer_id']}', '{$_POST['customer_name']}', '{$_POST['password']}', '{$_POST['social_number']}', '{$_POST['phone_number']}', '{$_POST['email']}', '{$_POST['address']}', 0)";

				mysql_select_db('bookstore');
				$retval = mysql_query( $sql, $conn );
				if(! $retval )
				{
					die('Could not get data: ' . mysql_error());
				}
				mysql_close($conn);
			?>
			
    		<h1 id="login_message">이제 회원이 되셨습니다.</h1>
        	    
      </div>
            
            <div class="cleaner_with_height">&nbsp;</div>
            
            
        </div> <!-- end of content right -->
    
    	<div class="cleaner_with_height">&nbsp;</div>
    </div> <!-- end of content -->
    
    
    <!-- end of footer -->
<!--  Free CSS Template www.templatemo.com -->
</div> <!-- end of container -->
</body>
</html>