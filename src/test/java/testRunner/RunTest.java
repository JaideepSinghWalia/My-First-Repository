package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="feature//demo4.feature",glue={"StepDef"},plugin={"html:target/cucumber.html"})

public class RunTest {

}
