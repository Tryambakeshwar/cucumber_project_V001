package stepDefinations;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = ".//Features/login.feature",
		glue     = "stepDefinations",
				monochrome = true
//				tags = {"@ALL"},
//				tags = {"@RETESTING"},
//				tags = {"@SMOKE"}
//						tags = {"@SMOKE,@SANITY"}   ****  OR OPERATION
//				tags = {"@SMOKE","@SANITY"},       //****  AND OPERATION

//				,dryRun    = true
//				
				,plugin = { "pretty",
						"html:target/cucumberhtmlreports",
						"json:target/cucumberjasonreport.json",
						"com.cucumber.listener.ExtentCucumberFormatter:target/extentreports.html"
						}
		
		)

public class Runner2 {

}
