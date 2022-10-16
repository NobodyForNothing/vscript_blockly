if("ddutil" in this) {
  return;
}
if(!("ppmod" in this)) {
  IncludeScript("custom/ppmod");
}

::ddutil <- {}

auto <- Entities.CreateByClassname("logic_auto");

ppmod.addscript(auto, "OnNewGame", "ddutil.setup()");
ppmod.addscript(auto, "OnMapTransition", "ddutil.setup()");


ddutil.isPrime <- function(n) {
  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods
  if (n == 2 || n == 3)
    return true;
  if (n <= 1 || n % 2 == 0 || n % 3 == 0)
    return false;
  
  for (local i = 5; i * i <= n; i += 6){
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }

  return true;
}

ddutil.findLast <- function(str, toFind) {
  printl("NOT IMPLEMENTED");
  return;
}

ddutil.setupFunctions <- []

ddutil.runOnSetup <-function(toRun) {
  ddutil.setupFunctions.append(toRun);
}

ddutil.setup <- function(){
  foreach(v in ddutil.setupFunctions) 
    v();
}

ddutil.conEnt <- Entities.CreateByClassname("point_broadcastclientcommand")
ddutil.clientExecute <- function(cmd) {
  ppmod.fire(ddutil.conEnt, "Command", cmd);
}

