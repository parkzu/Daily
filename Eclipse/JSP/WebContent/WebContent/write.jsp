<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.PrintWriter" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html"; charset="UTF-8">
<meta name="viewport" content="width=device-width", initial-scale"="1">
<title>JSP 게시판 웹 사이트</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<form method="post" action="writeAction.jsp">
				<table class="table table-striped" style="text-align: center; border: 1px solid #dddddd">
				<thead>
					<tr>
						<th colspan="2" style="background-color: #eeeeee; text-align: center;">게시판 글쓰기 양식</th>						
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="text" class="form-control" placeholder="이름" name="name" maxlength="20"></td>
						<td><input type="text" class="form-control" placeholder="별명" name="nickname" maxlength="20"></td>
					</tr>
					<tr>
						<td><input type="text" class="form-control" placeholder="글 제목" name="bbsTitle" maxlength="50" style="text-align: center" size=20></td>
						<td><input type="text" class="form-control" placeholder="e-mail" name="email" maxlength="50" ></td>
					</tr>
					
					<tr>
						<td><textarea class="form-control" placeholder="글 내용" name="bbsContent" maxlength="2048" style="height: 350px; width: 300px"></textarea></td>						
					</tr>
					<tr>
						<td><input type="text" class="form-control" placeholder="비밀번호" name="pw" maxlength="20" style="text-align: center"></td>
						
					</tr>
				</tbody>
			</table>
			<input type="submit" class="btn btn-primary pull-right" value="글쓰기">
			</form>						
		</div>
	</div>
</body>
</html>