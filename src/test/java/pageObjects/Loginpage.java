package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage {
	
	public WebDriver driver;

	public Loginpage(WebDriver idriver){
		
		driver = idriver;
		PageFactory.initElements(idriver,this);
	}
	
	
        @FindBy(xpath = "//*[@id='Email']")
        @CacheLookup
        WebElement emailtxtbox;
        
        @FindBy(xpath = "//*[@id='Password']")
        @CacheLookup
        WebElement passtxtbox;
        
        @FindBy(xpath = "//*[text()='Log in']")
        @CacheLookup
        WebElement loginbtn;
        
        @FindBy(xpath = "//*[text()='Logout']")
        @CacheLookup
        WebElement logoutlink;
	
//		By emailtxtboxl = By.xpath("//*[@id='Email']");
//		WebElement emailtxtbox = driver.findElement(emailtxtboxl);
//	
//		By passtxtboxl = By.xpath("//*[@id='Password']");
//		WebElement passtxtbox = driver.findElement(emailtxtboxl);
//
//		By loginbtnl = By.xpath("//*[text()='Log in']");
//		WebElement loginbtn = driver.findElement(loginbtnl);
//		
//		By logoutlinkl = By.xpath("//*[text()='Logout']");
//		WebElement logoutlink = driver.findElement(logoutlinkl);
		
		public void setemail(String emailid)
		{
			emailtxtbox.clear();
			emailtxtbox.sendKeys(emailid);
		}
		
		public void setpassword(String pass)
		{
			passtxtbox.clear();
			passtxtbox.sendKeys(pass);
		}
		
		public void clickonloginbtn()
		{
			loginbtn.click();
		}
		
		public void clickonLogout()
		{
			logoutlink.click();
		}
		
		public void closebrowser()
		{
			driver.quit();
		}
	
	
}
