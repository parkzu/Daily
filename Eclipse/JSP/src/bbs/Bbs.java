package bbs;

public class Bbs {
	
	private int bbsID;
	private String bbsTitle;
	private String email;
	private String name;
	private String nickname;
	private String bbsDate;
	private String bbsContent;
	private String pw;
	private int bbsAvailable;
	
	public int getBbsID() {
		return bbsID;
	}
	public void setBbsID(int bbsID) {
		this.bbsID = bbsID;
	}
	public String getBbsTitle() { //제목
		return bbsTitle;
	}
	public void setBbsTitle(String bbsTitle) {
		this.bbsTitle = bbsTitle;
	}
	public String getEmail() { //이메일
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() { //이름
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickname() { //별명
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getBbsDate() { //날짜
		return bbsDate;
	}
	public void setBbsDate(String bbsDate) {
		this.bbsDate = bbsDate;
	}
	public String getBbsContent() { //내용
		return bbsContent;
	}
	public void setBbsContent(String bbsContent) {
		this.bbsContent = bbsContent;
	}
	public String getPw() { //비밀번호
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public int getBbsAvailable() {
		return bbsAvailable;
	}
	public void setBbsAvailable(int bbsAvailable) {
		this.bbsAvailable = bbsAvailable;
	}
	
	

}