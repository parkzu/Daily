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
	public String getBbsTitle() { //����
		return bbsTitle;
	}
	public void setBbsTitle(String bbsTitle) {
		this.bbsTitle = bbsTitle;
	}
	public String getEmail() { //�̸���
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() { //�̸�
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickname() { //����
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getBbsDate() { //��¥
		return bbsDate;
	}
	public void setBbsDate(String bbsDate) {
		this.bbsDate = bbsDate;
	}
	public String getBbsContent() { //����
		return bbsContent;
	}
	public void setBbsContent(String bbsContent) {
		this.bbsContent = bbsContent;
	}
	public String getPw() { //��й�ȣ
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