package PageObjectModel_WithoutPageFactory;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PageClass {
	WebDriver driver;
	By lnc=By.linkText("Log in");
	By uname=By.name("Email");
	By pwd=By.name("Password");
	By lin=By.xpath("//input[@type='submit'][@value='Log in']");
	By lout=By.linkText("Log out");
	
	public PageClass (WebDriver driver) {
		this.driver=driver;
	}
	public void clicklink() {
		driver.findElement(lnc).click();
	}
	public void typeuname(String username) {
		driver.findElement(uname).sendKeys("aravind.guggilla57@gmail.com");
	}
	public void typepassword(String password) {
		driver.findElement(pwd).sendKeys("aravind");
	}
	public void clickonlogin() {
		driver.findElement(lin).click();
	}
	public void clickonlogout() {
		driver.findElement(lout).click();
	}

}
