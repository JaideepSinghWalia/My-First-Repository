package PageObjectModel_WithoutPageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestClass {
	
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		PageClass PObject = new PageClass(driver);
		driver.manage().window().maximize();
		driver.get("http://demowebshop.tricentis.com");
		PObject.clicklink();
		System.out.println("URL of login page is " + driver.getCurrentUrl());
		String username=null;
		PObject.typeuname(username);
		String password=null;
		PObject.typepassword(password);
		PObject.clickonlogin();
		PObject.clickonlogout();
	    System.out.println("URL of logout page is " + driver.getCurrentUrl());
	}

}
