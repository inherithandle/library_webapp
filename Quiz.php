<!-- saved from url=(0045)http://www.fi.edu/fellows/fellow1/apr99/quiz/ -->
<html><head><meta http-equiv="Content-Type" content="text/html;>

<title>Online Quiz Home Page</title>
</head>

<body bgcolor="#000000" vlink="#000080" background="./files/dragback.gif">

<p align="center"><br>
</p>

<table border="0" width="100%">
  <tbody><tr>

    <td width="67%" align="center"><h1><big><big><font face="Arial">미응시 퀴즈 리스트</font></big></big></font></h1>
    </td>
  </tr>
</tbody></table>

<hr width="80%" color="#00CCFF">

<p align="center"><font size="5"><font color="#000000"><font face="Arial"><font size="5">응시할 퀴즈를 선택하세요!<br>
</font></font></font></font></p><font size="5">
</font>
<blockquote>


<?
	$dbhost 	= 'localhost';
	$dbuser 	= 'root';
	$dbpass 	= 'rbxornt';
	$conn 		= mysql_connect($dbhost, $dbuser, $dbpass);
	
	if(! $conn )
	{
	  die('Could not connect: ' . mysql_error());
	}
	
	echo $_COOKIE["userid"];
	$sql = "select takes.s_id, student.name as student_name, c_id, course.name as course_name from takes natural left outer join taken natural join course, student where e_id is null and student.s_id = takes.s_id and student.s_id ='". $_COOKIE["userid"] ."'";
	
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

	while($row = mysql_fetch_array($retval, MYSQL_ASSOC))
	{
		$course_name = $row['course_name'];
		echo "<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<big><span style=\"font-family: Tempus Sans ITC, Arial\"><strong><big>$course_name</big></strong></span></big></p>";

  	}

	echo "Fetched data successfully\n";
	mysql_close($conn);
?>
</blockquote>

<p align="center">&nbsp;</p>

<hr width="80%" color="#00CCFF">

<p align="center"><a href="http://www.fi.edu/fellows/fellow1/apr99/index.html"><img src="./files/chopleft.gif" width="86" height="99" alt="chopleft.gif (7270 bytes)" border="0"><img src="./files/draghome.gif" width="139" height="80" alt="draghome.gif (9497 bytes)" border="0"></a><a href="http://www.fi.edu/fellows/fellow1/apr99/quiz/quiz1.htm"><img src="./files/chopright.gif" width="86" height="99" alt="chopright.gif (7174 bytes)" border="0"></a></p>


</body></html>