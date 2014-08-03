<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'passwd!';

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

while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
{
/*
	echo 	"EMP ID :{$row['title']}  <br> ".
			"EMP NAME : {$row['ISBN']} <br> ".
			"EMP SALARY : {$row['price']} <br> ".
			"--------------------------------<br>";
*/


	echo 	'<div class="templatemo_product_box">'.
			"<h1>{$row['title']}</h1>".
			"<img src=\"images/{$row['ISBN']}.jpg\" alt=\"image\" />".
			'<div class="product_info">'.
         	"<p>Etiam luctus. Quisque facilisis suscipit elit. Curabitur...</p>".
         	"<h3>{$row['price']}</h3>.".
         	'<div class="buy_now_button"><a href="subpage.html">Buy Now</a></div>'.
         	'<div class="detail_button"><a href="subpage.html">Detail</a></div>'.
         	'</div>'.
         	'<div class="cleaner">&nbsp;</div>'.
            '</div>'.
            '<div class="cleaner_with_width">&nbsp;</div>';

} 
echo "Fetched data successfully\n";
mysql_close($conn);
?>