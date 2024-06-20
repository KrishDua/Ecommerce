const Pooja = require("./models/Pooja");
const mongoose = require("mongoose");
const { name } = require("ejs");
const products = [
    {
        name : "HERITAGE INCENSE STICKS",
        img : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhITEBAWFhUWFR0WFhUXFhUWGBUZFRgYFhoZFRcZHSggGBomGxYXIzEhJikrLi4uHyEzODMsNygtMCsBCgoKDg0OGxAQGzIlHyYtNi0vKy0rLS8tLSstLy0tLS0tLy8tLy8vKy8tLy0rLy0vLS0tLS8vLTctLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEMQAAEDAgMFBAYHBgQHAAAAAAEAAhEDIQQSMQUTIkFRBmFxkRUyUoGh0RQjQoKSssEzNFNiseEkY3LwBxZDRJOi4v/EABsBAQACAwEBAAAAAAAAAAAAAAACAwEEBQYH/8QAPREAAgECAwQFCwMDBAMBAAAAAAECAxEEEiEFMUFRE2FxgZEGFBUiMlKhscHR8DRC4WKS8RYjM3JEVLIk/9oADAMBAAIRAxEAPwD7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA06u1KLTBffuBP9AufV2phaUssp69V38ixUpvVI1j2jwsxv2zpF9R7k9KYe17v+1/YdFIzZtzDkS2pI6gOI/oq5bZwkXZyf9r+xnoZ8jL0zR9s/hd8lH03gve+D+w6CfI0qna/BhxbvrjWGPIHK5DY1XSp1YzhnW7r0fg9TPm9W9sr8D1/azCASah/BUnSbCLqaae4iqU27WIanbbAt9auG+II8ibFZSctyJdBU5G43tFQgOLiAbCWkTOliufW2nhqU3Byu1yTfyMQo1J7kZO2/QES430sb87Klbawj3N/2sksPUfA99O0faPkVj05hOb/tZjzepyPPT1D2j5dNU9N4RcX/AGsz5vU5D0/Q9o+XTVPTmF6/7WPNqnI8O36MEyYAk20HU9ylDbGHm7RUm/8AqzDoTW8wo9pMO9ocx+ZrhIc2CCO4g3WJ7aw0JOMsya/pYVCb3GZ7QUept3f3UPTuF6/Az5tUHp+j/N5f3T07hevwHm8x6epdHeX91H0/hOvwHm8x6epdHeQ+af6gwnX4fyPN5j09S6O8h81j0/heUvD+R5vMenqXR/kPmn+oMLyfh/I83meen6Xsv8h80/1BheUvD+R5vMen6Xsv8h81j/UGG5S8F9zPm8jewOLbVYHtmCTE9xI/RdbDV1XpqpFaPmUyjldmbCvIhAEAQGjjdq06dpl3sj9ei5uL2rQw+jd5cl9eRbClKRy20+0FRxLQx8R9kcJnkXak+5cOricRjY61Iwj7t9e/d8+4vUIw4XKmrVc+xpPiPVOWJE9WET74WvHC06WvSx/Ox/Qnmb4E2GwTbOLSDA4Hbsx3HKItJ0JC062JesYtPrV/r9USUTdC1N71JlNtnAYmsC1lcU2dGi7h/M439w+K7eBxeCwslKzcubV7di/GWro7cb9xpVuz1Tc7sVAY0gQeXNsef+x1qe2MPOre9ut6L5lEJSTbqNtcEvubmD2SGAtaxo/mcXEkx1mSExe0sPdPO31Rat2vl4lMc8n62749xPh9lsa8VHjO8eqdGt72smxueI38FqYvE1KsctOpCMXylq+1/Ym5K7smbxaJktuBE627lyXg7JRVaFn/AFfn5uJ9K7WsxABLstyIkXPh4Kurh3FKPSRfY/izKqNq1mRh4ExTcPAdVHom2m5oObYBAmKbhYCzYt0WXC9ryXiM8nzPS4QBu3RyEWtpbuWFDW+ZX7dRnd7keIptqDLUolw6OaCPG9pV9OvVor1KiS5Ig4p70Z4XDtYA1lLI0NygANAAGjRHISbLXq1HN3lO7v1+LJptK3Ak3YgW5zEaGdfHvW5DCw3utBPtfgQ6aV9zMg7+U/D5qHmFJ/8AkQHSP3We5j7J+HzWPMKX/sQGeXusq+0O2hhmAik6o93qsaD5ucAco91z743NmbCnjZt5rQX7rb+xO1yuriIwXXyK7/mbENdD9nvLToabi4+RYJ811H5K05RvCs0+Uo2+TKVjeaXczZpdpsxyjBYqZj9kA33vcQAtZ+Slda9JG3Xe/h/JYsVGW5fIk2P2hFd+QYauyxOZzAGwOpmRygRJ81rbQ8nqmDpOrOrG3LW/cSp4iM3ZI38biI4R7/kuRQpXeZlzZ1/Zb92p/e/O5e22Z+mj3/NmjV9tlst8rCAIDF+hUKnsvsCOfyjovkOZnVGUdEuwe5eVp6SJ8tV0fRWO6Hp+jeXffq7N9u4o84pZsmZX5HkLnXZcIWLsyIS7B7CzmYELF2As5mAsXYCXYCXAQBAEuAgCAIAgK/GlwcS1hIL4JmI1M9/gvteDnlw1Ky/au5WPLzpqdWpd2320vd8jWdiaZgbxpzHKMpDiTBJAibwCVdUr08u+99NDNDBV5VF6tuOpMSRwgEEaSNZAg+C1J1rvRbju4TCZKU1J3zN3ItiVa5cd9ABpU3ZQIDXceYcyTpqV4/yolN0YZuMr/Atp4enR0gv8cCr2qPrH/wCv9VzMJ/xx7CXM7fst+7U/vfncvYbM/TR7/mzRq+2y2W+VhAEBi/QqFT2H2BHPPqARPPSI5R1I6r5dhsE60HNX320V+vmjqpN7io292gZh6eZozVCQKbCPXIIzaEmzZPl1XU2PsyniK2Z3cY79La8OLK6+aC6/zqI9g7ebiGVOHK5j/VPrCwcHP6OJz6cgvXynU9J03meWSccv7dE+vR9xyp0VHCy5rW/HeXuYGSNJI8F87xtGMJucPZbfdruOuk1owtIkEAQBAEAQBAEAQBAEAQBAEAQFBtvE1KuGqUnkUmux+4zkOAFLLmzOnUTqbDkvqlGbnh4LqS7rI1qVKFOpmWumbvN2l2SwtACpRqHeMaQSXB2Yn+XkeVuvNbUaKi00Sp4qcp2a0Nra2Jbvmtc4ZiGwPH+8qzOloX4em+ibS5mGBM5+KYIHK2vReW8qf08Nf3fRk5rcc3tqsGvcTzqBvO5e4NAt3lcvBQc4RXVfwVyhtLed12W/dqf3vzuXrtmfpo9/zZpVfbZbLfKwgCAxfoVCp7D7AjhdvUMTVq4enhiQTvC50MysDd3BeXNdGtgLn3W8d5O0Oloy0/d9Du4etRpRnKqr7rLW/HdZo5naLazXHfvz1KZLc003NykNNsjREkc4Nl7TA0OjTutTWxc6NSSnRVlbr3343J+z7gKzS48T+ERo7K17uXTvVtVWr03fi/kzUq0pPDVZpaJK/e0dH2crNc2qWvDuPk7NFtCJlp7jC+d7dzpRUub+h1cVBxcU1bTl+XLdecNY1MVj2sfTYWuJqEtZGWCQC4i5tYFbFLDOpCU01Zav5ciyFJzjKS4b/kT162VpcQSAJMRMC51Krp088lFMhFZpJGGCxIqMbUaCGuAc2YEgiQYm2vNZrUXSm4N6rkSqQcJOL3onVRAIAgCAICE4gBwaWkZjDXGIJALoF5mA46cithYaUqTqLcrX6r7g7Lj3Ey1wEAQHmYTEieizkla9tDFz1YMkIrZA+S39o85XReWtiJ5SvqOAr0qVFKrK17fJGnimrx7PuQ4XFuzEGDIP2W2hpIiB3BdrLFxujVPMTSLnsdI9Vk8tMp0A7lyq+NoUqrjJ6rqf0R1cNNKjl7T3Z+GymobcRGn3tbLzHlDiqVahFU3+7k1wfNFlSpmyrkjnNs0WuqOzDSpmF44gbHzVGzqvRwWl7xt4mvKOY7rst+7U/vfncvV7M/TR7/mzTq+2y2W+VhAEBi/QqFT2H2BHEbb2UyvUoh1DeOy1ACa7qDWBxpEklnE45msiND7lw/I2ajhqrcresuF29DOPdXNFU43672SPnGzNj1MNi6xrMhhe2lTGcPYKT3OcTwDUBjI09Y89PVJSc3Nu5vbMwvnGfMrOMb25vlrvRYYLtHhMNjN7UpPe5tM0wGuAYPWIz0yLvGYt7g4k3EC94OU/XWhTipRp/wC0pX97lfl125+B1vY/GYar9JfhN4GGqJbUvlJb9gkzlOsHT4DwvlnRdNUVJLju7i+niZVva4Kx0S8KWlNt0u32CyAF29fAJyj9jU1IBjyXSwKi6VbM7LKuv9yNzC26OrfdlX/0jZxlStu6k06Y4Hf9Vx5H/LVVGFHpI2k96/b19pTTVPOrN7+X8nuwh/hsOP8AJZ+QKOMdsTP/ALP5mcV/zz/7P5kOyKmZtMuqOL4cSDMOAJb4WkaK3FxyOSUVbQzXjllJJaEeJxEVqzX1zTaKVNzbiQ57qrSWh05jwttB8LqdKnmowlGCbzNPsVt5KEL04tRu7vwSi/uZ46tWZgnvectZtAuJbFntYTpca8tFXShSli1CKvFyt3XMUoU5YlRWsXK3dc33UCS07xwgEGI4pjWQdI+Ko6VRTWVbyhStfQ0NnbypTzOrOkVng2YAW06zmgHh9lsWWzXcKdTKor2Vz3uK6+ZfWywnZLgvFxT+Zz3/ABSxLm4bDvwssr06u9c+aYe2m2lUzFocZLQSJAFxrN19AwmzqFHDdC4ppr1ut9f5ocWU25XLrYm2nYjD4R4gPrMl3RuQfWFo58VgO++kLweMwUcNXqxesYvTrvuOlRWeDm+HzZZ1sM85S2s8Q4EjghwBEg8Mi3SFpwrQV7wXx0+JKM0r3ivj9yDa2Icx2Hh+Vr6uR/q6buo/VwMXaFZhIRnGpeN2ldb+aX1LaFNSjNtXaV14pfUnwtNrhmzipxHK85TEWgFoAsZ0UKtWcPUSy6aoomtd1jaWqYPmPazbGIFarlY5u5xUNiliQKjSCW5sj4qtljp5Xb1X1HCYSj0Sla7cVfw+By5R1ZsbM7YVGPqmtTfla1r6Yp4esTlqRZ4cSC4Coyw0Id0R4OpSt5vJrtd14EMvItX9umcZNKtLWNeT9HqTDsgEDQu4xIi0HouVX2JKvVdWdnJ79X2bi1VakY2Rbdntttrvr0wH5qTgHF1MsGr28JIAcJadFx9s7P8ANaKemr4djL8PObdpO5XbVjePkfbPf71jCX6ONuRsczt+y37tT+9+dy9hsz9NHv8AmzRre2y2W+VhAEBi/QqFT2H2BHBdosHTfUw7nyXU872CSBIdR4jGpByx4leO2Fi6tDBVej4ySb5Kxs18XKlLo4/uXy/yV9anRpE1t8+g5xDHuYGneW4czXMeCQAbwCvT7Ix6dPo6jbt+b73OfiNoOlTUaqUo30vfTwNnD4LDVGk7unWM8T6lGm1zp7xSbfwHvXbjVzL/AG7vvaNCWK6R5o+quSv9bm52cwAo74NotpNc4FoaQQeGJkAHUGxXhPK+U26efr3u/I6WyXN583VbW5crxR2Sv2hg3vqUHtLQKTy6CTxZmOZGlvWnmtyhXhTpzg7+srdmty+lVjCE4v8AcrdmtzaxbHOY5rYlzSLkgCRE6FUUZRjNSluTuVQaUk3wIdl4d1KjTpugmmxrJBMOytAk2tp3qzE1YVa0prc3fsuTrzVSrKa4tvxMNn0KlNtNhDSBOZwcZvJEAt6kc1OvUpVJSmm7vh+MzVnGcnIOwJdVqueGup1KTaZaSTIaahMiIg7zryRYhRpRUW8ybfjb7BVcsIqO9Nu/bb7EeMwVR2Gq0AQS5jqbXuJ0c0gF8A3EwesTzhSp16UcRGq9Emm0ufV1EqVWEa8altE02l262LFsxcX6T+sLUlZy03Gu95p7Kwz6dMtfEmpUdLTNqlRzxqBcBy3Kk6NavFuVo2SbtusknuuWYmopyzR5JeCSOc7ddmauNqNqSM1KjUp04DWB28YW8eZ5IudQvbryhwG7O/7WczoJ8jLsrsjFU8LQp1abadbDOO7OcPZVY+SQ4tktmY7iGm9wvNbRxeFqYiU4SzRmlfSzi1uav+bzoYSeSLhUWj/E1+al5tGjUqsa0U8rhUY4kubAa2o1zwCDJloI0vN1zaE6dKblmurPg97Tt4PrLqMoU5Nt30fDmml8STaNBzn4csbIp1c5uBbd1GQJOsvCrw9SMY1Mz1krfFP6CjOMYzT4q3xT+htYdxMyzLxGAY0sZsSLklU1UlazvoUyST0dyVVGDQ2nsXD4h1J+IotqOpGaZJdLCS0yII5tb5Lo4PauJwkXGlKyfVcrlSjJ3Zp4DslgaLqb6OFax1NxfTINThc4BpIl3MNA9y2am38bUg4SkrPTciKoxRqdo+yr8Y477FAsEmkw0Ad0Tlk5m1AX2BF+vcujgNvYXCU1GNJ3sru+9riQnRlJ7zZ7K9mKeCY4NIdUf67wHtDg0ktAYXuAjMbjVaO2NsefZYxVorWztvJ0qWQ0NqH6x8e3+quwtujjfkTW9nb9lv3an9787l7DZn6aPf8ANmjV9tlst8rCAIDF+hUKnsPsCOK22yX0LtB47mJjgkCevTmvD7EjOVCSjuvr4G/J4bOlWSzP2b/HUbOwZq8THNAabOhrgXQenOHagiAe9dmlXnSqJr1O6/w4jEYfDRjlcc35zJKzYdkc4B4vAIBiJsC4n3/0XpIzjXp26S73rL6r7NTgOUKVWyhZf1O/fpYn2cw8ZLSJIu7ISYHVpNtNSvD+UkKmampJrV2zNN8OR3KCpKN6bTfHLe3VvJfpTe/4fNaL2BW95eDNrKzB+L0ysc74fOVZDYTS9du/UvuZUL72kY/THfwXef8A8qXoNf1eBLo17y/O821wsTSVKrKmuDsVJhUGSOqHcOUxe/hf+y2KMqSUukV9NO0i0+B4M8v5i2UW6Xn3qb83cYLc/wB2/wDNxjXU8GeGzEzxdI6jx/VP/wA6lJrdbTnfk/zgPWBz8f8A66dPn1UksPenfd+7ff8AOwetqSU5gTrF/Fa1RRU3l3X07CS3EbS/LfWe7Sb/AA/2VtSWHVR29m3N77fcir2PXl0OgcxHhaT381XTjRbjmfB37dbLqvoG3qC50tgWi5/opRhS6OTb9ZPRX4fniLu57SceKRobWi3vUK8KcYxcHvWuvEyuJItYkEAQBAEBym053j49v4SvRYa3RRvyIacTtuyx/wANT+9+dy9hsv8ATR7/AJs0avtstl0CsIAgMX6FQqew+wI5bH4JtTISzMWkxciJy6CROnevJeTFbBxpyhXmoyclbW3AxtGlUlKM4RvYpMVsbK05a9ajTbmdFKaYAMEyBMxHxPVet8zitVKLM4Pa9ai2p01O/vR3fFFcO1eEpsZ9c+u71c+SagaAPXL8piZPfJtZX0KcKXrWu+y1jUxSliasqllG/BbuxdRc9kdtDFb1wZla17WiYzO4dXRbwXkPKtR6WjJK127/AAOhgcyg4t3tuOKfVxOZ28qOptk+tXqsdrYhkudH3Y716TRGzLyihQt0kYPqy6/DUstg7axFGux+5diWREsLHm41kUw4O/1xN/FYioJ5tCNTa9LGUstOKXY34WZtYuricTUqVg0YcOPDTqBua3DJ+pJEkE3PwutWtXw8Z2lvNnD7TjRpqDhe3HM18jsqAOVubXKJ01gTpbyXzzaVvO6lvefzIxlmV+ZItIkEAQBAEAQBAEAQBAEBHXrBok+QuT4DmraVGVR2RhuxrHEugzlYbQDc63mO79Vs9DSjJWvLnb4WuZUJyWiMxiiMuYAgzLmzA6W1v/vVR82jK+R9ie98zErx9pG0FqNNOwOT2q2arrxxz4wbDzheiwrtSXYYTtc6jspieAM8f6lew2Z+mj3/ADNCr7bOlW+VhAEBi/QqFT2H2BHPPeAJOi+RRi5OyOoabtrUh9vyB+C6lLY+Om7xhbvsQdSG5srsX9DrtDKlCWtdmAytZfUxlIMGb9ea7dKG2KDdSU1qratteCTRVOFJ6fIgwO1cDhhUNJhptLpdcZSWiOHM+1uSlitn7Txrpqrlbi96vxtv0J0qaXs8TS2YcAPrnUHvBlwLrju+rMTPfPK0L0E6GJbcdE+e/wChwns3C4dudWz6m7/Al272owTMp3ZplxguDGS4NAIHASSL80WxsXWik5Lffj9i7pcNfNCy7F/A2RjRiGF7BDZgAtLT4gnWbLmbSpQwk40FG8nxvf8Awzo2o1Kf+0nfi2dAMfAA3bumrOQ5cS4WI2HiatVzVld8y2NWKjY99Ij2T+JnzVPoDEZst437SXSxMKm1QIlh/E0/EGOaoqbJqU5uEpK6+plTTVyP0wP4bvMKHo2XvIzmHpj/ACz5hZ9G/wBaGYeljypH4/JPR8ffQzdR6NpvOlE/H5KLwNNb6iGbqJRjX2mmb9xMKeHwFCrJqVZRtz4mJzcVornjsZU5U58M1/gt30Pg1vxUfzvIdLL3Q3FVf4X9U9FYDjil4fyOkn7pk3EVSPUg+BP6rVxGDwdKUclXOnvtpbv1JxlJrVWK3B47HG1XDtHe2NZ6F55XW7WwuyIztTqtrt/gnrlvx5ENf6c+pZlNoaOF7pcDOX7DXAg+sJWxS9D06Tg5vXf+WJOEcsZ5teKt9bozOExJiQO+CP7LXVbZ8bpO/J6/YplWxKl6trdi+5nSw2KGjREXmDqsZ9nvm31Xt9zLq1pQtLf3WM8JQxzGhhhwvxmA4SbDLlgwOduS2KnoyqszhLN1KQo7nnZhiNjVajmy3iLgSJtPtHuGvkqcM1Ot0FG+u66tZd5KUlFOS3HabLwDaNMMb7zF3HqV7XD0VRpqC4HOlLM7m4ryIQBACjBVbWw7TlGUc7eS8f5SU+j6LolZtvcrcrG1h5b7nz/ZfaZmKxWIw9OlS3bHZadVxLhWImQ1sAHQmxMgSFbPZXm9GNRznmdr2a00LKVRyk+oyfi6rRNTA4YfWikTDiCXZoIOW7YDZPKTMZSs08LTqWyVZu6v7TR0YUaLV6knmfBJP84/jNdu1a4fUpjA4dpY3M4hhcAIJDrEZmmIt+kKzD4PDynHPVnZ/wBbT3Gdo4ejh8FLEUp6rcmt9t604mxV21Xa+lNLCmnUDnWa4PDWCTLc5GhEESD3cuxgti4LFJqMqqastZ6a9Z46rtGrCHSWjZpvdqWXpI7mi+cMx9R2WajsrRBI4Rq58RwyPFcfaGxqdDGVIRlPJGKdr3bur+H2Zt4LHzrYeE5Zbt9y1+ZfFg6DyXh5zeZtaHaQFNvsjyChmYPco6JdmSvdXf8A4gCTkPCQGcP1THc9buK3VTj/ALb579+urRcoR9Tr3+LROyuZpticzc2bwyzYD+ZVOmmpS5O1vH7EHHe+swGOJFQ5RwTzN4c9vT+SZ+Sm8Mk467/sn9SXRapX3/ZP6k2d2fLA0B5zBJEeNlmhQhVlFJ+1JR8Sp2UcxT7C24az8RTgfV4h1Jj5nM0ZiJHtAse0ifsyuptrZlPC1E4PRq9utO38lVCbqJt8C037iWgEXzAkNNsrg2wJ7z10XJ6KKTlytx5l+Vam0wQLme8x+i1pyUndKxBFPtB9XO8srva0QMjcPniLuOY+tM8tPFdfDUqTpxzwTb4uduxW4Fcm76M29k1XOa7M9zzm9ZzBTHg0DUCNTN58Bq46kqckkktNyd/F/mhKDucjiX1n4quDiqrGNNXSo8NaG1HjQOAEBzfADlYr6MnTpUKc1BNtRsrLe4q/A0qFNdJOrO7s1FRu0ru933JeJXYf6XD3itWewZYO8qkDK6sTMum4qMHXhjkrKuKw0KmRpX7DYr7NqVop0ppcldpv86zJ2IqFpaazxwMGY1CYL6tIk62ADyNdBqu5GnCOFUkt7vu6mee2fOfpB0530i1Z8zpKeEhoZUDjwgOJc42aARmPXhBtYzcGIXCljKz0bt3LQ9UsFh8znFav80W5dnUUOI2Nk46bnHhfOZ5MA5SCLXGQvB6WPUjpYHHwlUSqacjQ2tgassO40t/HxOz7HU30aNPeOmSXAX4WvAht+cyfElcPaOLpVtuxhBWcYtN83v8Akc/ZdGdPB3m97uurqOyBXUNk9QBAEAQFZt2rla1xBLQbxeJjVea8o8NUqwpyirqLd++xsYdpNo+U7OofR8QXOo1K31taoKrGVOEV35soYeEAS4yCefUrarqWNw9oXV0vh18TboRyR1a3819yXtP2hw7h9GDHNc45nlzC3Jq7MG2zOJ+Ga82WvhNn1acnUqvW1u3+DewdbJWjKOtn+alK/EuFJzml54Q0PENHA6SCZkgXMGwIBsbLtbOq06VddJa3Wr27CO3qTxOHcKKedO+VPffR6butcSfY1ahlFXFVyKgzMaA6kW7st/MXOfeeszJnpVdoVKc8uDpKUN7eq1v2cv4PHvZTUHHFSyN6Ls/ybeD7RUmVDSzb6jzYQCx4I1a0ktmSrsdh6ePw+Zx6Oq1pLjF8m1ZtdW45WGjWwVWylmpreuDXYdZge1FKoOFhB9kloNu7ovmW0vJ7E4WWack09cy3a8+R6vB4+liF6uj5PeeP7UsBI3L7T05dFRDYcpRUukjr1m26luBLQ7QhwJFIi8cRAPjpoqKuy+jllc0+wkp3MRtNvF9SeO7uI3sG3tawAVnmM9PW9ndoS6V6dR63aPqxRNhA4nWFj7xYLPmE3f1uvd+amOkYONJEfRzBkHX7Rk+4m6ktn1E/afh4d46V77kv06rMjDknScrjbVZo4CrB5oOSa1Wj3+BiU01Y1aFLK5zmYFrXPjMRTdLspJbMaxJjpK2a2HxVa3STm7dT47+BCMox1jobG8rW/wAJpf8AZvtJk+ZVPoupr7fg9fgT6br+JKMRij/25/A9YWxpN6Rl4W+hHpVzIziMbywp/C75q5bC6peBnpIczNz8dlcRhySASGxGYgWFza9lZT2DepFSTy31fJEHWS3M5WnsbaxNR1TCBxqNIcA5rQTUu+BmMCZjnEL2FSNOSUIpqMbW04JW+Rp0Kk4uSluumn1r/JZ7P2btNtPdPovDCJMOoG7zmcGyZHrHX3LQxGBp1avSpO/Y+zmbaxKgk4rVcSCp2OxRGU0nFuXL69IHKDmAkm0EdDZdOni8RGn0aVvzt+prqNDpniHH13fW7479NxNT2FtWBNOn73tM+MWNgO5YVOg23KMvh9yytjaysqVu18ur7kA7GbSqkDE1G7uZdTaWjOOjiCOQHgjqdEn0FN35trT5k5YhztmZ2Oztj1yfr35Wj7LcsmPAQAuVgdmyjXeKr6zf+P4KZ1Flyx3HRMaAIC7RSZIAgCAIDx7QQQRINiDzWGk1Zg0H7Dwpu7DUiRzLGn+oVMcNSirRjZEnOT4nrdi4YaYal/42/JS6Cn7oU5LcyQbLoDShT/A35LHm9L3V4GeknzfiZjA0v4TPwt+SkqNNborwMOTe9mQwlP8Aht/CE6KHJeBi7Mtwz2R5BZ6OPIxc9FJo0A8lnJHkZuzLKOiZVyMCFmwPVkBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB/9k=",
        price : "2.99",
    },
    {
        name : "CYCLE SANDALUM INCENSE-24PK",
        img : "https://cycle.in/cdn/shop/files/Sandalum-LS-800x800.webp?v=1708680974&width=480",
        price : "2.99",
    },
    {
        name : "HARSIDHI ABIL 40G",
        img : "data:image/jpeg;base64,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",
        price : "1.99",
    },
    {
        name : "GOOD LUCK DELUXE DHOOP",
        img : "https://www.jiomart.com/images/product/original/493660830/cycle-good-luck-sandal-deluxe-dhoop-20-sticks-with-1-dhoop-holder-product-images-o493660830-p606659432-1-202312111625.jpg?im=Resize=(1000,1000)",
        price : "2.99",
    },
    {
        name : "SWAHA EDIBLE CAMPHOR",
        img : "https://www.bigbasket.com/media/uploads/p/xxl/40230698_1-swaha-edible-camphor-detoxifies-provides-glow.jpg",
        price : "4.20",
    },
    {
        name : "SWAHA CAMPHOR SMOKELESS",
        img : "https://rukminim2.flixcart.com/image/850/1000/xif0q/havan-items/k/p/i/pure-smokeless-camphor-pack-of-1-32pieces-swaha-original-imagpxg9gyrxxgyg.jpeg?q=90&crop=false",
        price : "3.99",
    },
    {
        name : "FLUTE SANDALO INCENSE - PK6",
        img : "https://i0.wp.com/theindianmart.eu/wp-content/uploads/2021/04/AGARBATTI-Flute-Sandal.jpg?fit=800%2C800&ssl=1",
        price : "11.99",
    }
    ,
    {
        name : "FLUTE CHANDAN INCENSE - PK6",
        img : "https://cdn.powered-by-nitrosell.com/product_images/18/4273/large-flute-chandan-incense.jpg",
        price : "11.99",
    },
    {
        name : "SAURBHI SUPARI WHOLE 100G",
        img : "https://storage.googleapis.com/resico-retail/441/fbb9ea4b43d22a528e093ae39f1ff569/products/17504-el6n7uze-thumbnail.jpg",
        price : "4.95",
    }
    ,
    {
        name : "PITAMBARI POWDER 200G",
        img : "https://m.media-amazon.com/images/I/61t9dvcdFaL.jpg",
        price : "3.30",
    }
    ,
    {
        name : "SWAHA VEGAN EASY DIYA 30PCS",
        img : "https://m.media-amazon.com/images/I/8173lguS3nL._AC_UF1000,1000_QL80_.jpg",
        price : "5.99",
    }
    ,
    {
        name : "SWAHA PURE HALDI",
        img : "https://www.bigbasket.com/media/uploads/p/xxl/40230695-2_1-swaha-haldi-with-no-harmful-chemicals-pure.jpg",
        price : "4.50",
    }
    ,
    {
        name : "SWAHA KUMKUM MAROON",
        img : "https://m.media-amazon.com/images/I/71OuHN8+F1L._AC_UF1000,1000_QL80_.jpg",
        price : "4.50",
    }
    ,
    {
        name : "SWAHA COW GHEE DIYA 30PCS",
        img : "https://m.media-amazon.com/images/I/813cZ9dvaaL._AC_SS300_.jpg",
        price : "6.50",
    }
    ,
    {
        name : "MATA CHUNI UV5",
        img : "https://m.media-amazon.com/images/I/51AJmX4lzGS.jpg",
        price : "5.30",
    }
    ,
    {
        name : "MATA SHINGAR TRAY",
        img : "https://m.media-amazon.com/images/I/81pT272bbIL._AC_UF1000,1000_QL80_.jpg",
        price : "8.70",
    }
];
async function seedDB(){
    await Pooja.insertMany(products);
    console.log("data seeded successfully");
}
module.exports = seedDB;