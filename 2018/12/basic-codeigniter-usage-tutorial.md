---
author:
  nick: Unknown
  link: https://www.blogger.com/profile/00073980860956332189
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-12-18T13:17:00.000Z
description: In this tutorial, the author will provide a tutorial on the basic
  use of the php framework is CodeIgniter.The author uses CodeIgniter v
lang: en
tags:
  - tools
  - codeigniter
  - blogging
thumbnail: http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/codeigniter.png
title: Basic CodeIgniter Usage Tutorial
type: post
updated: 2023-09-02T23:22:37.717Z
---

In this tutorial, the author will provide a tutorial on the basic use of the php framework is CodeIgniter. The author uses CodeIgniter v 2.1.4 which can be downloaded directly from the official web CodeIgniter, ie http://ellislab.com/codeigniter. What is needed for this tutorial is:

1\. CodeIgniter 2.1.4
2\. Text Editor (Sublime Text, CodeIgniter, Brackets, ell)
3\. XAMPP / WAMP

![CodeIgniter PHP Framework](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/codeigniter.png)

CodeIgniter PHP Framework

What is done for the first time is download CodeIgniter v 2.1.4 which has been provided at the official website then extract the download and generate CodeIgniter folder. The folder should be the reader move into the htdocs folder in the XAMPP / WAMP directory.

Related Articles: **[Codeigniter Early Settings](http://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=id&sp=nmt4&tl=en&u=http://www.tutorial-webdesign.com/menghilangkan-index-php-di-codeigniter/&usg=ALkJrhip-cCW96nqXDsM897bt2TR85zOLw "Initial Setting Codeigniter")**

After that the reader must run the web server contained in XAMPP / WAMP in order to run the PHP script. If it is, the reader can directly open the browser page and then write "localhost / CodeIgniter" in the URL Browser (Without quotes ""), if the display "Welcome to CodeIgniter" means you have successfully used the CodeIgniter framework for the first time

[![Welcome Page CodeIgniter](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-2.56.21-PM-450x281.png)](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-2.56.21-PM.png)

Welcome Page CodeIgniter

Before we discuss how the page can appear, the reader should know that this CodeIgniter framework has a MVC / Model View Controller structure so that when you look at the contents of the application folder inside the CodeIgniter you have downloaded there will be the models, views and controllers folder. (For those who do not understand the MVC programming model, please read here: http://en.wikipedia.org/wiki/Model-view-controller)

[![Folder Structure on CodeIgniter](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-2.57.17-PM-450x281.png)](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-2.57.17-PM.png)

Folder Structure on CodeIgniter

Let's look at the routes.php file in the application / config folder, inside the folder there is a code like this:

```php
$route['default_controller'] = "welcome";
```

\-> This code indicates that the default controller or controller that was first executed when running our web application is a welcome.php file that is in the controllers folder.Readers can change the default controller in accordance with the wishes later, patiently yes, hehehe

From there we already know when the website first run (When we type localhost / CodeIgniter) will run the file welcome.php in the application / controllers folder. Inside the welcome.php file contains:

```php
<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Welcome extends CI_Controller
{
    /**
     * Index Page for this controller.
     * * Maps to the following URL
     * http://example.com/index.php/welcome
     * - or -
     * http://example.com/index.php/welcome/index
     * - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     * * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $this
            ->load
            ->view('welcome_message');
    }
}
```

It is the main structure for a controller inside CodeIgniter. The name of the class that is used is Welcome, it is because adjusted with the controller file name is welcome.php. If we have a controller with filename products.php then we have to create a class like this in it:

```php
class Products extends CI_Controller {
  public function index() {
    //Do Something here...
  }
}
```

In the welcome.php file also has a function index, the function is the default function that will be called or run when the first time the controller is running. We can also add another function in it, like this for example:

```php
<?php if (!defined('BASEPATH')) exit('No direct script access allowed');
class Welcome extends CI_Controller
{
    /** * Index Page for this controller. * * Maps to the following URL * http://example.com/index.php/welcome * - or - * http://example.com/index.php/welcome/index * - or - * Since this controller is set as the default controller in * config/routes.php, it's displayed at http://example.com/ * * So any other public methods not prefixed with an underscore will * map to /index.php/welcome/<method_name> * @see http://codeigniter.com/user_guide/general/urls.html */
    public function index()
    {
        $this
            ->load
            ->view('welcome_message');
    }
    public function greetings()
    {
        $this
            ->load
            ->view('say_greetings');
    }
}
```

Later function greetings will call view "say\_greetings.php" which later we make :)

After finishing the controller, it's time we switch to Views in the application / views folder. Inside the folder there is the file "welcome\_message.php". Well, the file "welcome\_message.php" is what was called by the controller welcome.php with code:

```php
public function index() { $this->load->view('welcome_message'); }
```

So already know the origin of the page "Welcome to CodeIgniter" earlier?
Let's create a new file named say\_greetings.php in the views folder to be called by the controller welcome with function greetings.
Contents say\_greetings.php:

```html
<html> <head> <title>Belajar CodeIgniter</title> </head> <body> <a href="http://www.adrianhartanto.com"> <h1> Greetings from CodeIgniter, <br /> by Adrian Hartanto </h1> </a> </body> </html>
```

Once done, let's try to open a new page we created by typing "localhost / CodeIgniter / index.php / welcome / greetings" in our browser URL.
Notes:
1\. CodeIgniter: Is our main folder
2\. welcome: The name of our Controller, located in CodeIgniter / application / controllers / welcome.php
3\. greetings: Function Name that is inside the controller, ie function greetings

And finally we can add new function to our controller and also show new view that we have created ...

[![Screenshot](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-4.21.58-PM-450x281.png)](http://www.tutorial-webdesign.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-26-at-4.21.58-PM.png)

New Screen Shot View we have created :)

#### Download Script

If you want to try it yourself please download the script from **[Github TutWeb](https://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=id&sp=nmt4&tl=en&u=https://github.com/tutweb/Tutorial-Dasar-Codeigniter&usg=ALkJrhjGvzxY3OcB3mc-FOH-ftUk1t5ipg "Download Script From Github")**

Thus the tutorial from the author for the basic use of the PHP CodeIgniter framework, for the use of the model will be the author discussed in the next tutorial ..