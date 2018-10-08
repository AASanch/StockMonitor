﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace StockMonitor.Controllers
{
    [Route("Home")]
    public class HomeController : Controller
    {
        [Route("")]
        [Route("Index")]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }
    }
}