package POM_WPF;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class TC {
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demowebshop.tricentis.com");
		
		PC locateElements = PageFactory.initElements(driver, PC.class);
		locateElements.loginMethod("aravind.guggilla57@gmail.com", "aravind");
	}
}
