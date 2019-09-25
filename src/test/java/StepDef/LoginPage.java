package StepDef;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPage {
	
	WebDriver driver = null;
	
	@Given("^The login page is opened$")
	public void the_login_page_is_opened() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser Drivers\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	    driver.findElement(By.linkText("SignIn")).click();
	}

	@When("^User enters Lalitha as Username$")
	public void user_enters_Lalitha_as_Username() throws Throwable {
	    driver.findElement(By.name("userName")).sendKeys("Lalitha");
	}

	@When("^User enters Password(\\d+) as Password$")
	public void user_enters_Password_as_Password(int arg1) throws Throwable {
	    driver.findElement(By.name("password")).sendKeys("Password123");
	}

	@Then("^User will find a TestMeApp homepage$")
	public void user_will_find_a_TestMeApp_homepage() throws Throwable {
        driver.findElement(By.name("Login")).click();
        System.out.println("Title of the current page is: " + driver.getTitle());
	}
}
