package stepDefinations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.Assert;
import pageObjects.Loginpage;

@SuppressWarnings("deprecation")
public class Loginsteps {
	
	WebDriver driver;
	public Loginpage lp;

	@Given("^user need to be on sips login page$")
	public void user_need_to_be_on_sips_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\Drivers\\chromedriver.exe");

//		System.setProperty("webdriver.chrome.driver","C:\\Users\\Tryambak\\Desktop\\Complete-Maven+Cucumber\\sips_cucumber_v001\\Drivers\\chromedriver.exe");
	    driver = new ChromeDriver();
	    
	    lp = new Loginpage(driver);
	    
		driver.get("https://admin-demo.nopcommerce.com/login");
		
		driver.manage().window().maximize();
	}

	@When("^user enter email as \"([^\"]*)\"$")
	public void user_enter_email_as(String email) throws Throwable {
	    
		lp.setemail(email);
	}

	@When("^user enter password as \"([^\"]*)\"$")
	public void user_enter_password_as(String pass) throws Throwable {
	   
		lp.setpassword(pass);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
	   
		lp.clickonloginbtn();
	}

	@Then("^dashbord page title should be visible \"([^\"]*)\"$")
	public void dashbord_page_title_should_be_visible(String title) throws Throwable {
	   
				System.out.println("_______________________"+driver.getTitle());
						
						Assert.assertEquals(driver.getTitle(), title);
						
						Thread.sleep(3000);
	}

	@Then("^user click on logout link$")
	public void user_click_on_logout_link() throws Throwable {
	   
		
		lp.clickonLogout();
	}

	@Then("^login page title should be visible \"([^\"]*)\"$")
	public void login_page_title_should_be_visible(String title) throws Throwable {
	  
		
		System.out.println("_______________________"+driver.getTitle());

		Assert.assertEquals(driver.getTitle(), title);
	}

	@Then("^close brawser$")
	public void close_brawser() throws Throwable {
	    
		
		lp.closebrowser();
	}
}
