---
name: Política de commit.
about: Template para a criação de commits.
title: Commit polic.
labels: ''
assignees: ''

---

# Commits Policy

### Atomic *Commits*
Share work development in small and concise *commits*, so that each commit implements one feature.

### *Commits* in English
The commits' messages pattern must be done in **English**, in order to make the project more accessible to the global public. 

### Rule 50/72
The messages must contain maximum 50 characters. If a better message is needed, add a new blank line and describe better the commit using the amount of lines necessary.
However, each line must respect the maximum number of 72 characters. If your commit needs more space than that, it's not atomic. 


# Anatomy of the *Commit*
The anatomy of the commit must follow this following pattern:

### Shape:
```
<type>(#number of the issue): subject
  
<body>
...
```



### Subject

-   Maximum 50 characters.
-   Scope type must be lowercase. 

Example:

`fix(#13): route correction /login`.

The values allowed for `type`  are:

-   `feat`: new feature
-   `style`: generic formatting in the code
-   `refact`: refactoring of the code
-   `test`: add/refactor tests
-   `fix`: corrections
-   `docs`: related to documentation

### Body

If it's necessary to give a context to the commit and explain the reasons of the changes, write in the commit's body following the rule:

-   Must contain the reason of the change and what was changed.
-   Maximum of 72 characters per line.

Example:

```
refact(#28): change in registration button 

The button was not intuitive
```