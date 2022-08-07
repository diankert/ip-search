# Read me zur Ip Search App

<p>Die App wurde als Monorepro mit Nx aufgesetzt, um so die verwendeten Technologien zu kombinieren.</P>

## Anleitung zum Starten der App

Falls VSCode als IDE benutzt wird, kann man die Nx CLI Tools als Modul installieren. Danach kann man die App 
kann über die Nx Schaltfläche an der Seitenleiste starten. Hierbei muss das Back- und Frontend
separat gestartet werden. 

## Start über Nx Schaltfläche:

Backend
- ip-search-backend
	- serve	
		- production -> Execute Task
 
Frontend
- ip-search-frontend
	- serve	
		- development -> Execute Task
		
## Alternativ können folgende Befehle in der cmd eingegeben werden

Backend
nx run ip-search-backend:serve:production

Frontend
nx run ip-search-frontend:serve:development

## Mögliche Verbesserungen / ToDos

- Der Userinput sollte während der Eigabe auf die konvention geprüft werden um so mögliche Fehleingaben zu verhindern.
Um die Überprüfung zu Realisieren kann z.B Regex genutzt werden. 

- Das Absenden der Abfrage nur mit gültigen Werten, Search Button solange disabled bis Eingabe valide ist. 

- Error kann interaktiver gestaltet werden, z.B. Messagetoast, so das der User die App nicht erst aktualisieren muss um die Eingabemaske
wieder zu erhalten. 

- Ebenfalls sollten Test erstellt werden um die Qualität der App und Funktionen zu Testen und um mögliche Fehler
zu unterbinden.