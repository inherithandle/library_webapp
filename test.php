<?
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = 'rbxornt';
	$conn = mysql_connect($dbhost, $dbuser, $dbpass);
	
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}
	

	$sql = "select takes.s_id, student.name as student_name, c_id, course.name as course_name from takes natural left outer join taken natural join course
			, student where e_id is null and student.s_id = takes.s_id and student.s_id ='". $_COOKIE["userid"] ."'";
	
	echo $sql;
	echo "\n";
	
	mysql_select_db('Online_exam_ver2');
	$retval = mysql_query( $sql, $conn );
	

	if(! $retval )
	{
  		die('Could not get data: ' . mysql_error());
	}

	while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
	{
    	echo "EMP ID :{$row['s_id']}  <br> ".
         "EMP NAME : {$row['student_name']} <br> ".
         "cour NAME : {$row['course_name']} <br> ".
         "--------------------------------<br>";
	} 
	echo "Fetched data successfully\n";
	mysql_close($conn);
?>