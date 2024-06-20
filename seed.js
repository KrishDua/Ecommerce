const mongoose = require("mongoose");
const Product = require("./models/Product");
const { name } = require("ejs");
const products = [
    [
        {
          name: 'Frozen Food',
          img: 'https://img.freepik.com/free-photo/flat-lay-assortment-frozen-food_23-2148923166.jpg?t=st=1716539798~exp=1716543398~hmac=8a2313a37fc3e5ea3e191a54591b64e28c1637fd95bcab13429a88f57f1aa778&w=1800',
          price: 7.71,
          desc: 'Convenience meets quality with our frozen food selection.',
        },
        {
          name: 'Pooja samagri',
          img: 'https://media.licdn.com/dms/image/D4E12AQG6UEBzEK8HyA/article-cover_image-shrink_600_2000/0/1700120936157?e=2147483647&v=beta&t=miE0Z9FxhZWUDPCEPIRB8SFDkqaBYPSTsuAv96_Do_o',
          price: 2.99,
          desc: 'Complete your rituals with our premium Pooja Samagri'
        },
        {
          name: 'Pickles',
          img: 'https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167',
          price: 5.49,
          desc: 'Taste the tradition in every pickle'
        },
        {
          name: 'Breads and eggs',
          img: 'https://static.wixstatic.com/media/36ce83_acb934676c0f46aa98ad19ef5e3f2ab0~mv2.jpg/v1/fill/w_1000,h_666,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ce83_acb934676c0f46aa98ad19ef5e3f2ab0~mv2.jpg',
          price: 7.3,
          desc: 'Treat yourself to our freshly baked bread and pastries'
        },
        {
          name: 'Rice',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh5KkTpuKpr6lOG7vucI_7cgA-8eK2Kvs6tYG9tz8_sRZv4E-',
          price: 15.50,
          desc: 'The heart of every great meal: our rice.'
        },
        {
          name: 'Pulses',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcu19XhrloQgkVdCyOX2sXVnIZXGfmnmZCmAsgf_L21Ax91w8',
          price: 3.20,
          desc: 'Nutritious pulses for a healthier you.'
        },
        {
          name: 'Spices',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFGtHunW_AKZ4pNa95H0Sl42Yei_4qFCHM1142POErdgWx1Bp',
          price: 4.30,
          desc: 'Ignite your dishes with our vibrant spices.'
        },
        {
          name: 'Oils and Ghee',
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGBgYFxgYFxgYGBUXFxcYFxgWFRgYHSggGBomGxUXITEhJykrLi4uGCAzODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHwBlQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABCEAACAQIDBgQDBgUDAgUFAAABAgMAEQQSIQUGMUFRYRMicYEykaEUQlKxwfAHI3LR4TNikoKyFVNzosIkg5Oz8f/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAtEQACAgICAQIEBQUBAAAAAAAAAQIRAyESMUEEEyJRkfAFYXGBoSMyscHhFP/aAAwDAQACEQMRAD8A7KQDSDae7SMS8VkfmPut6jlVitUbVGh7OS7fwBzFZUyN9D3Bqj7V2OVN+VfRG0NnRzJlkUMPqPQ8qpO2dypAD4JDr+FtGHvwNCmhjiE0Fj1oeWLpV02xsKVGIMMqsOYjYg+4FqU4XYeJkayYeRu/hsPqRQMVwwNe9Ot3tky4mURRLmfoOCj8Tn7oq37I/hZiZiDiGEEfMA5pCOgtotdU2BsDD4KPw8PGFHM8Wc9WY6k0ONhsg3N3SiwUdh5pW+OTr/tXoopntnYsGIXJNGrjkeDD+lhqPaikatmlpwHPMd/DkRxTrCPHSQXyNlWZSL5TG58pIvpfLfgSeXKtsbMeCRkkRlAOmYFTblcH5e1fSvi0v2lgIsQuSaNXXvxHow1HsaSqdoz2qZ80vhgxHXn3sRY/mKxhIzGGl4hD8yATb5gV2Pav8Jo2ucLMYzyWTzr6BxZh75q59vNu9icNE6YmIpeWPzjzRNfMrMjLx+6Suh0OlUTJOJXI9qZYhGdQGaRidSzgeUXtced3v/09NcLIyxoqsWL3zG+oFg8uU8BxK3N/hNCYrDkk3GpLX7G5PuLk/StczqxIN7LbQ34nUHobmxHeqWGgvG7RNi5sGPlAAAAtoEGl8qLYfnxofYOHZyzA6t/KW/NpOJ9lu3tQmOBLBOS6XPDMdWJ9z9BT7ZE3gIJGAAAIS/EZ/ilt+Ii4F+VQzyahrtlcauWxhj4vPIE1yQMthzL5UQe+U/KusfwlwQjwuIC3yfa5Ql/wosaf9yt8qoOyMLkQzupOQiZlsblwbYeADmxfJw5g9RXat1tjHC4OGBtXVbyH8UrkvIf+bNXJ6SXJteFr9/v+GVzaoOyaVEqkGjFFeyiu2iFkIatwajkbWpAaJiRTesZRWoFaO1YBmU0Oo7VuGvUwjpWhkwZkJqJIjejstYVaHENmkaVMErZVra9MkK2RGKhNo4sRLc8eQ/U9qMxeKVFLH2HU1zfeHarSsQD7/v7opMk1FFcONzf5Ae8O3CxOvHh09W7DpVA2ji8zGx0/PW+ptrTHb2P83hqRoPMe9qSi5Ouv74Vy35O/UVSMBb8ae7K3dnlUusTZRxJFl9yaj2Fs3xZVU9R+fCumYsFf5ZFhHoFHC/Nj1Y8b96eKVWznyZXdIoybDmX4oz7WP5Gm+E2U9vPYdBfl371Y0a62IqKQUsuKJcmyTZ0iqMo0twHb+/Op5KEwkRZxbhrc8qYzoEXMzAL8zr+fpxpLckbpgXhV5+FBbUxr28gMY5XsXPci1l9OP5VjBbSWQlpCAV+IDQW5lR3+lQaSdHQsMqsZiJpB5jZBqeV+zH9Kr+1d4ApKYcA20J4gcRw0vQ23d4GlGRPJGOQ5jqT+/wBKr9xy9f3+/wC1O38johipfF9CbETM5JYknqePpryqCVwou3+BXkzMwRFLu3BV4nuew6mwFW7YW6wQh5iGl42+5H/Tf4m/3Hhy6kVQZ5FHsV7B3XfEEPiLxxHUINHkHfmi/wDuPK3GruIVjRURQqroABYD2r3wd786GnkJoSyVGvJxybm7ZpJIL16ozGOdernuTDSL8cSBxIrwxK9RSsmk2N3pwUMnhS4qJJAbFSw8pPAOeCn1tXv0cJbDiF6itHxC9RVf2ttaLDqjSkgO6RrYFru5so05d6U47eST7UcNhcM2IMZj+0P4iRrCJLkfFq7ZRmsO1ajFxMw61oZh1oS9etWo1hQkFbeKOtU3am/OHjLRwXxOIBssMYc52zBWHiBSoy3JJ5WqzE1qNYakqjnWDKvWq7i96MFG5jkxMSuujAt8BPJzwQ9iRQe9e84wyIIk8aWYMYkVgoKquZpGc6BQLdb3AFajWMcTvGn2pcMqk3Fy1tB2JpwthzrlW7mJd8RHJIMrubst75SeV+ddPpYo3IYRtppSLffYH2/BS4cHLIRmjJNgJF1W56HVT2NN8JpetzJreiY+VtpxSxPIskZSRT50PFXW4KnU6WNx1A56VofDzMepzddGItb2Za+jd4cBg8QQZ4ElcCwaxDgfhDqQ1u17VzjeT+GDECbAgg6hsOW+6dQInbmD91j010tQ5LoNHMvGRXa6ea56nNzBF+F+NF7MfPMrTKSieYRrxdhwBbgovqT0HAmp9r4DEYRguJiaNstlZlIutzwOvP1HerNuzsz7esOFhjyFjnxM2pyRAsvkci5L8hwuBxs1pzS1q71+gyb+hdf4bYSXGmPETKi4aFi0SqP9ecXUSEk/6cY0Ufi14rXVSKX4HCpFGkUShY0UKijkqiwFEZzTY8cMceMFSFk3J2yVlqLwya1MhrdHNOCgeRbGsq1bTRk1AYmFAIWlRykVEzNUbobVrDRMjiiEagYVNEo1ZM1EpSvCOtPErLS1rBRvao5ZQASTYCsK96Q7e2ja4B0H1b+w/fChKVKxox5OhVvLtckkD5dB09apuOxOQXPGj8VNxZqq04lxMvhwoWYmw5KOpZjoABxJ6VxNuTPRilCIqjhkmlIiVndiSAoLm1+gGtWpNxMSkXiHJ8JZkzedQBex0sTYcAasO4OwJML4jyN5pAq5FN9ASQWPAnXgKvCxcm9x09asoKtnLPM70c23YwLRuJSLW1UHmRwJHS450/e7EkkknUk8z1ozb+ECsrRpxDZso/DY3sOGh+lLYpahOdaFq9hUElr6VpI960kl0rYYWy55m8FOrg5j2RND87e9SblLSHUSfZ8liQBcngBa56+g78q3x2Oiw9jIRJNrlUahL6aDr34+nCq5jd5VuY8KrKvBpCfO/wDb9O1I5cXxsbseJ/zTKXFUtnTD0/lhu39sZicw1I0HQcPSkQxZJzZu39XKxtUWIjubtcjh29B1tUgbMvDLY6cP0rV5Z0rSpEviBhf5+3KjNl7MlxBIjsqjRpD8K9gB8bdh7kVHsLZQnxHhksECFny8bLYAX+7cm3W1/UdFhhCqqIoVVFgByFJJqJDJkrSItjbJiw6ZYgcx+N2sXe34jyH+0WAo4C7BeFT4bD9f8fvhRgAGg+tMk2rZxt7FM+GIJ5gc/wC9arAx0ANMliNuP+etSoluBvS+2rsPIjweEyqPKLnjex1r1FeJXq6FKKVInTEu+e1DhcDiJ1+JIzlPR2IRT7MwNIpNkRR7CeJwCDhWldj5i0pTxTISdS2fUHsKtG3dmJisPLh5LhZFKkjip4hh3BAPtVXg3Zxz4VMDiZYfs65UaSMyeNNEhGWMqQFjuAAWudB616JzCbdDbmNzbLwpWMRPhy7E+aRo0U5GP4B8AHEmxrGyNsSQbO2jtKNRI0uJkePiR4YdIlZrakLdjbtyp9jd1ZztAYmGZIoVwwgVQt2sCTkAIyql8t2GtgQLcaW7I3R2jh8PDEuIgkVQ6SYZgVgdHDffyM7NmdmOgB0GltcYtO7E07wh55YZcxzRSRKVDxEAqWU8G46DtVSxO92LlnQRBY8M+KOGzsoylVusjmbP5JCdETLrpx4Vbd0dh/Y8JFhs+cxg3bhcszObDkLsQPSqrjtyMYjYmLDS4dsJi2Z3jnDkxM/xNFk4kHUajgvS9YxPuVs/JjcQgJZMHBDhI2NhckeLLoNAcxF/QUz/AIkbYfC4CR4jaVysSHmGc2JHQhQ1j1tSfYuzMfh4xg0iIb7SJJMaHUrNFnDO8gYl/EKgJlseWtqsO+uwhjcI8BfIbh0fjldTcE9uI96wQQ7LwWHwR2c00UWeIq5Z0DuzjKZbMfMxbUegHKqB/Ejabx45xFlthsIkZzcELsH4c2KlQB/am8GKnxm1MHFifs5OHV5nMWZgzAZVLF1FjnAIUcLntZfv5u3L4uIYvGWxEquPisI4xZVbTjahYBPiN4ZYTEsWXx/DWQ+UtdzYBEW/Ekk9gKbYrfzGfacsJQyDwg8ZUsGY6uF18qgXu3cUDsvd6dsVcTgCQIrPl/mjKACIxbKt7cdaMk3cmhx8gMqpG8ge4HnZeOQk6BfS9+1Lox1fY+8cUpyk5WPI6fLrQu2ca0kgggYZ7+b/AGjqa5/vhgJEZPBuxvcFeIuvamWytvfZ8E5EMpxbGx8hJPTW3Cpyl8yiLLtzeDDbPj/muGltoOZNc5xv8TcVISIwFXlVfx+ycZO5kkikd211B+Q7U43X3HxGIfLIPBXmWBv7cqS0zPkdJ3ERp8Gs+LAmJLvZ1DDLwRFuNLkKfarZs3BrEpIUB3IZyBa5ACgAclAAUDkB6kh7EhSHCxxIfKoVQfxZQDf6g0yjxS87UMEVuXlhkELPW5lqJJVNblxyroFMNJ2rKz14VuFoGNPFrbxxW2UVqFArGMgg1FIRUtxWCorBNIwKwxtUigVq4BrGBpJKyovUxVQCToBqSeAHU1zjez+IHGLBaDgZjz/9IdP9x9hSSko9jwhKbpFw23taLDIS8iK1tLn9BqfSucbZ3siY2QOyjmfLfvrr9OdJNn7KlxLZmew5u12J9BxJ+Qq5btbjx+JndXkUc3sPoNK5pZObpHSoxxbfZU/t8k+iYeVx0W5+oWpNn4+XDeUYSQa3ylWOo5n2rsscaRLlTyi3Kw+gpTikjYm6D1tqO96E0oeQLNy8aKbgv4hIp88WUjre/wAuVOYd9Y31GX6n6gmpsfsVJBYjMO+o+vCqrtDccWLQv4bDlrY9rfpU3lfzCljfaLK+8in76AdQGa3Y6ilL46Ea+ck62ULGo/5ZzbtpVMxMk0DZZlIsdGtdT6cLcuXSp1x4Y68fpY0j5NHTDFjZZZt4yoJhVY+jAZpLdnckgdxYaaVXcXi3lOaRzl6knU9deP0oXEzZRe/bXhfqOp+g78K2SBpAGc2Tj3b07d+dHdbZZRjHpGcN5rhRwGp4C3c8vSpZHEfDU8L8h6D9+1elkCDQacgOvLN1oaGIubsCxJsFAvck6Kqjiew50KszdGI4y5zH4R3uT8vThwppgdlyzC6JZb2LtcJfmAeLHsPpVt2BuXoHxVr8ouIH/qkfEf8AaNOpPCrWcAGUKSdNAAAAByAHT5UzhJrRyS9Ql0VPZWzxh48qnMWN3YixY8tOSjkPzJJprhsRoAeN6mxWziD5dR30I/vUuBwI0LCx7nn1HKuNQycxHJNWG4eI2F9PevMBwqeKI86mXDL0vXbxbWiNpA0a253rzUW0duVakW6e1Zw1QFIESFjy+Zr1EXFepeCGtnjEQeFatfoflRBesEnpXqWctC3aW0I8OmeZgi9W0HzNKot8cE5suJiv/WKa7w7IXFQtC4HmGl+R5GvnfeTd6TCSmOUW/C3JhSubQKPonDSiTVGDDsb0p2/vVBhfK7rn5LcX+tcQ3f3gxWFJ8KUgEWynUfWnm5OAXG40HESXN85vxY8belD3Ao7NsZ5JIld1sW1sNdDQe+OEVsHMsoORkIblp68qsC3AAXgOFR43CCWNkk+FhY+9PejUcJ2Hi4MNIHSYFiRmZpAzMBoBfpaujb07MfELDJGNCNSTYAEXvrSaDdzBYbE+HhYTjcUTc5jeHD368tPnS7fXGYqKdFxEoZRY5Y/Kq9gOdRlNhUR5sjZkULh5MRHdNSARb5mjNtbXwzMHVY5GX7xOgqnYzd98VNHIsirHLwLNqtqb7zbJwscSx/bLso+FbG59udKptjcUDbW3xlSxiKg9QAfQC9Ey7QkfCiY4hi54i6i30qtbK3YmmOkb25MdB61aIP4ZeUZsSynmBwFbs2yvRbwzobrM5PYXq2bM3xwbKqzNOZT+IkAseAGXvRWxtwIYGDNMz9iBam21d3cKUZxGudQWUjTzAXH1tTdIOzDzYZMsWJks4LkC9tMxjH/6qOgwOFk1jkP/AEvSE7ppio4pJi3imNQxvzJLH6sfnQsn8P3j1gxDqaEP7Voz7LX/AOBkfBiHHrY1lcBiVOkqOOhWx+YqmyYPaMY0nJt1oeLenHxNlkUN6imtGpnQWxUyKS8RP9BDfSosNvFExylijdHBU/WkGzN/EbyzoUI5jhTtdq4OcZWZHvyYD9aa/kwDdJgeYqQjvScbGC2aFyo/CTdT6HiKmjmZTZr6ceo79x3opvyBjQJWFWhZcVkXMTde1Rw7Qza5SBRsAwy1oZAKHOIqk/xE3kMSfZ0NpJB5yDYpGdPYtqPS/allNJDwxuTpCT+IO+JnLYeA2hBszA/6pHH/AKAeXPjwtVc2JsZ5mDG4W/zrGwtkNO/DyCul4DZwRQAOVedmyvx2d2oKkSbJ2ekSiwF6ZPiiTxIHIDQChA1YVqh7rqkS427ZM0vevGS4t2tWFiJ4Ct48Ieen60E5WHRC7WAtUSycjwomXD0OY6zuwC/a+y0nUgj0/wAiuY7T2a2GY2F0va3Er/iuxyQWUdaqW8WGVgwYaGmU3B7HxvZSsIiscznM3pcDsq8Pc/5o173u5JPAKDr7nl+/WgRhHU2ueJy20zAcLd9fWmEJCgHna5Pp096tL5nbHaIXjZpFRFLMdFVep5D/AD6mulbr7urhVzvZ5zxbiqXAusf5FuJ7Cku42zgqtiH+OQWjv92Pr3LfkB1NW9cRfn61uaRx5puTpdBRmtWoxBFCmesBqk8rslwJ1uTejI1ofBrc8ra/T/8AtqPENuJH79TVcabViSaWjy1InU6fr6VqgA/f51rM9VulYnbo2kf5VCzVE8lRNIahLMUUKJyRXqCZ69U3lY/EcZBelW9m1/smGkmtcqNB3ps0XelG8exRiYHiY6MPrXsvo4yjbmDaeLkXFSTgQk3yAcuQq8bw7vQYuPJMoOmh5j0Nco2Pt/EbId4JELxhtPTqK6PsffTDYhQVJvzFqnFryE4vvTurJhcWIEu+fWPqe1aNuxj4XVxE6Muoa4A+ddR3ux7TzQrhoh4qtcSFdAOdjVnw2y5ZFH2mRWPMBbCt30ahBudvmGRIsV5Z7hbccx5WPOmG+eNcjwkfJZQzsLkqrGwFhzOvypridkwKUkyLmjN1NhoSLX+RNVXbMsiyYhgMkjmNM7nyqhjABA5nRiK0nSMtifG73phYhhtmxks3GQrd5G5sB+p0pFi9kYmQfaMa7dl4k1dN1d2xb+ULX+KZxd27IOVWnEJhMILy+eS1wGOZj6DkPkKTxb0hvNHMF3ZxM8cf2WJwoH3vLx5gm1NtmfwpkPmxE+Q8bLqfc1Y8bvjIwskZW/ALq35WH1qLZe1ne6srKe5JJ9SahL1OKGrsdYpscbNwEcSBGxbMF0sMot8hRiPhuRLfM0mwsh1ugHcc62c21X3pP/dHwhvYfljtZIeUfzqRZYjplHL86RxYusriLm3X9aSXr9dB9gcbOCJHGjrd1RVY9SFANFiSI/dpM+JGZtfvH8628WsvxFR1QPYsY4jBQPxBHcEiswbKQA5Gv/UM3tQCTVKMURwqsfxDE+wPDNdEO0t31dSPBja/EjQ+1Vd90I9dGjbo3D2I0q4fbSut6ibeOG+V3UHo2n51eOXFPpiOM12ioJhsbhv9Niy9L5lozC73iRo48UhiN7eKp0VuV+gPfSrdhFiKkxka9NRSnamxkcG6i/XrVaaQtpk4lCTpGwDB+FuB5hh0vbhTXHYmJI2diAFBvflaqDDhmiClMxyzIMrHVR93Kfw1r/EfGBkVJM0SyFgy31IU2B062v71lIDiJdofxELTWgFwGsO+tVzGTvisSztq0jX62HAD0AAFS4mHCxQXhN2OmttOpqbciHxJsxHCufPKjs9OqTZ0LYGy1iRQOlOQa1jUAVJCL1yIVu9kIwpbXgL+9HRYVVFgNep4mpkUVh+HCnUEhHKzAWo2I9q1kl9+9CSS0s5pDRjYQ5FDsnOvRuCda2z8aTvY1EUzX0pXj8IGBBFNJ7HXnQ54UJqzLRWN4dlAMrxoAQpDgXs+tyfNz0B+lVkYHxZEiB8rG7f0L5msfTThzHvfdtw3S3a30qu7m7PvJKzfdyxqex8zE9yBHTJ23ReGSoOx8kluw5DpbhaiYJ76X16VLHgl9R0P96NhjVeAA7gVGOCV7ZFzQG5INiKkwkeYk8APrU+KW4oONgPX60s4qMthTtDqGbLopt+fzrJelsU57VIGc8Ln0H00p5Zm1oXghlGedasaDwmEfMWPl99T7URIh608ZScNqgNK+yJ5BUEktSNHraoZYD6VzTjNq0UTRH41ZrEMTHt63rNGMJtWrM2rLCfWonTvUhkseFaySqBc19CcAr2rs2CUfzEB9RrSvESwYKFmjiAAHG1NYtpxu1gpPtU211jeJlZbqRqKR12hkjjmA3rmkxDOgNybDsOgq9QbTxQjvcFun+KAfdaJfPGwWme7cTBtRdRzqaY1E+DXEyhXmbIuYBh2Og09SK3x+DWaWGPFBlaJyVtqkyhTYE8QV09vWn+0bNC63y3U69O/tSvZOJTFBopRlniOSVDfUp8LrzBIsQw11pmvAt+TXa23BC64eDRjYO4APhg8lHC/5Uhx8UQlNrkgediSWdu5PGnzbNiZvFJ8349A5toPEXQPb8Qse1V7aWzmiSWUjOulmjuw75gNU9wK8/PjlPJyk9LpXr6HRjlFKl2G7BjveUjU8Ow7UzZuwqubFxsssS+GlgBa5qabDTn4pSB0UVxT3NouuhsHXrb3qCXFqOLCgl2ag4lye5qX7GlvMg050KYTIxiBviGtFw4tGkRQw4j86gVYlAsov6V6NlDxjT4r6DXQE/pSTTYURptJCxIYcaPh2ghNsw+dAx4aO18oHoKkkw8JF8oJ+tCSbCMji+QIqRFY86SKkXIkdr0UENrpLU3FrwYaSYc2sTSDeTYoeM3Gq6g/pRoxky/F5/ShdobZXg4ZbjmNKMJzWRUZpUULCYnEYdw0MrIL663X3Brp+7+8hltDiVEcxAysPglvzXoe1UCBBLmCDOc2gUXJv0A1q04DdVn8I4mQxmPXw1N3sDdczDSP8696M5pquvJxSUa2NZcLJDi/5hH2Zo/Ea+pEiNdQva1ySdAB3pPsnGw7SfESzR3S4ERPOMX847Eg26i1Mt+sz4cm9ogNQT/qAfjPEIDxvx6VW9xJleMu1wrEBTwuqiwNuQOth0tV12T7PfxDwECYWIQIBZ9SOluH1oD+HiC5Pemm/uG/+nUq3lz2+at/alO4kgAI71y+odHZiX9M6Fn5UbhaXxG9H4VTXPBbsmw0nSonflXnbShXl1qjmoiKNmmIa1DGiJDeoyo5VCULlaKpkYNqxmvW7EW4VpE2ulCq0azzmvFdO/70rckA3tUEUupH7/xTRpOmBg+PHl10pRsE5fFtzkP/AGJTvaMRKX6fWlGy47Ke7sf0/wDjSyTT0MnocwtRIb8uVAoOVM8HhgBe57inhb0I6Rm9he2lDx7MeQ5ibAnnqTe/KmqJcai/76UV61SWFT/u6E5tdA8WCjQWtc9TrUwGnCwH0/t/itjatGb99ao6XQu2ZIJHHQaa8vlUMjEa/v2rbMKhd70smqGSI83SsltL8a1c2+VRFqmpUPVmjym+hr1RMteqfKQ1If8Ah1pJBfjrWCxFeBNeycZomHA4CgdsXCEAEk0dJMy6jWhYJXkN2WwpX8hkUuXASG+rU83ejkVLMNBzPOrBOgte1LcZPYVwepz+zpdnRjjzCJcclipF7ix96oRxYabw3k8DExaYfEH4ZEv5YcR1HRuX5l7QxxvpVb20wksW4jmPyPUVx4vxCUpVIpLAktF+w+0y7GPER+BiLeeMgMko/wDMhPB1PbUc6Ck2NqTDIYpPutGxCsOhQnynsCBVMwe8hVVgkZJEHwpJfynrFIPNE3pp2pxgtv8ABXa3QuQp9M3wP7lTVsk+T0JGNKmM8PiMZGSHiim6soMcnvl4nuQay+3Ib2k8SE9HAI/5C35VNLiw2XMbHipv9VI/TSo5doyJpIAy9SAw9+lc/JOW+/zKcdaNvGjazJNGb8y4S3/5LfSmkWy1tmZy4/26j5il2HGGHnEeRusRyD3A0PoQamyw3vbXqY4r/NFU/WjKLktOgW0FGfDpwH0P61j/AMQiZlsLZczDgOA4fImhZG/DMR2yy/pNUMmINr+KoA4sVl0PT4tNK5smGlu/qOmN12jERcgW9qz4mHbmB9KWoW/8xP8Ag/61s0vL7Rl9Fb+4pX6ferX7o1hp2Sp1jN/r9RQU2DN7fCe5UfK5qDw0PxYmRv8A7a//ACJomOKFeEshPQtb/tq0ISj27BZhY2W13t7E/wDu+H5tUzYRJRaQAjqWuf8AjFf/ALxWIRHmARQW7i5A5kk8BW2N2hlORQtzoC5zH2iF/rTc4xfWwOyNZIsNHbDxZVJt5EsXbpddWPqTW8+ItAWxEiQxfezEKqi/AgEln9/aojgHDXkLm/xOzCJVXkvVR2A9xSvae38PH5IoxipVta0ZaOK3DIupYg/PrXVzlpvS+/vonxXgG3hnTEwqSkkeBQAjMCs2MI4BIzqkXVm1N+VO91dmBcMomADuS5XgEDHyoB0Vco9qC3e2HicQy4jHEjXMsbWLM3FTLbQKvJBoKsmOwDPw0Nd2Nyl8TWvBJpLQl3t2SpwkuT7oz2/pNz9L1QN1sRlmI5GxFdYweyyL52vcWtyIPI1yrHbPODxJj18pup/FGx8p/Q9waXPG4l8Eu4nScEdL01jawHL50j2bKMq+lOAdK48fQkuyeaQ2oFr1OXrR6E1zCtGgNhWrS1ho+9ROKz5JdG0edq1iNR6mpVFqlG27HMzHSpMHALE8+H+a0GvOpUlyirwiuVsnJuqRHtZgEPpSnAxkKBbW2vbMS360Rjps7BevH0HH+3vU9uevetP4tmWkbJGAwtw6U0h6Dp9KFwzDr/ajIGHGmgkgMKjb9KIRaGgN70Shq0dkpEmWhZTx+X6frRDyW/evIUI7fp+RpslUCJG5v9f1NY/f+K2Vb3qGVuVQapWyq3o0neh81ed60RrVz8+UitUiQG3Hj6/SvVHPLc3+vWvU7mloWrHKm9ZB71oya1jwxevXOU3dQaykYFaBaHxchUaUk5qCtjKN6N9ovZPLqegqsbTkmI8sTkdQKxtzGyI91cgZTppa458Kq8+8OJIsZT7WH5V43qpRyTt2jqx3FUTxkszK906FgRc0l2k4Fxem7Y6SSI52JsDVSxMpJqMMCTtFHMU7WYghhw4EHUU+2LtEOuQgKQLafCRwFweB96WRwhwytws30BNC7tt/NtyKsD3GUn8wK7pwU8TvwTi6l+pZZ48gsVkXupsPW3A/nWI9oOhFsQCOjrf2NrWp1hY7Ky3JAta/EAgG1+gvSufDqV8wvqV1tyJF7jW+lcGPNbp/f1LSx/IYYHaTMcspRE5MhZgT0K5TamaYhLeXEJ6NmH51V12NHcWLLf8ACbfpQeIzxfDI59bH9Kr26i/v+ROlsv0E7/dMTekij86ncYjMreBm0INsrcbcwfWuWjbswNrqfUf2ovDbem5ED0uP1pniyV8VA5LwdHkixBN/Cf51g4PENb+S3zqiSbwT6ec/8m/vUP8A49MSATx7t/etUnujWjo8WzZhqUVB/udF/M3rzQxqby4qBSOQPin5CqHg5mkWQsdVva1uXW9EbK2d4ti0so7KUH1y3+tK5pXa6/N/6oNN+S4YjauDRSGnllB4qiLEpt1aw096Dw+9oa64KHDwi1/EYqxsDbieJv60LiNlQw5SEDnTWS7n2vwqvQ4158UsTsRHmN0TyhsoJAa2pGnXmaTHntPgqrd19/5M8dd7Gk+HlxcjL45lltcFr+HGtwCxGhPawAq5bpbvfZ0yl2kYnMzEAC/+0DgKVbhQgwmYjzysxY/0kqqjooHAVcsExzMOhA+lccHP1fq/Yb+Fbfzdf9DJ8IWg9FqTIK0FbCvrkeeaSR1W9892xiow0Y/nR3y8s6n4kP5jv2JqwYmUgGtYHJUUrSemGLcXaOc7sbSzLkb4kNiDoRbqOVWmOTSqbvI4Tab5FC5gC1r+Y2+I62ue396e4KYkCvKyR4SaOt/EuQ5WWtw1L42qUSGkToWg1uFByvrUjtpQp41skm9BijPi1kSXrK4YWvr+71oRatGL8mbJVPp/asYlCRYfX86GvrRaCmjvQHoWQeVzm43sewH+aYGcAGx9KG2nAouwGunvw40PIdf32qTm8doalLYRBPrT3Bagd/nVUBqw7Eb+X6EgfM0nppXOmbItDZWsNOfp+XKtjNy0+VQuNAeo/Uioi1d8puOiKjYSZq18Sh2atlX9/P8AtU/cbdB4pEjPpUGINxUbtXg1yaHPl8LG41shy17IeNv3+7VIDWhNJwURrZEf3zr1a3r1JaCf/9k=',
          price: 15.99,
          desc: 'Elevate your cooking with our premium oil and ghee'
        },
        {
          name: 'Papad',
          img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYv6VzUhdXdZKBfS8gQ7KKYYN6eNU09RZnAODmcGgmCLgwtuVp',
          price: 3.10,
          desc: 'Authentic taste, irresistible crunchy papads'
        },
        {
          name: 'Biryani',
          img: 'https://m.media-amazon.com/images/I/51VtGNf7KQL.jpg',
          price: 6.20,
          desc: 'Biryani that brings a feast to your table.'
        },
        {
          name: 'Snacks',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMe01YW3CwZPqFNSNDjSeugLJK1-fUqCOJenzsyPU8ftoft97',
          price: 2.99,
          desc: 'Satisfy your cravings with our irresistible snacks, perfect for any occasion.'
        },
        {
          name: 'Ready to eat',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ76suBHh0qmlLdj3wHhc0D5k7wDl39NuUGrq_EGQJnHOEU5l75',
          price: 7.50,
          desc: 'Experience authentic Indian flavors in minutes with our ready-to-cook meals'
        },
        {
          name: 'Dairy Products',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzy_xRLQdcj0a_AgU8JqI9DD3asJbUqs3IxRJD4j5_cO7Z-ML',
          price: 5.90,
          desc: 'Nourish your body and soul with our wholesome dairy selections'
        },
        {
          name: 'Dry Fruits',
          img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQIMx86xw19OouR_CYzCKpDhQz6FDjsYh9yKDDhFPOtMoNqw-QZ',
          price: 8.75,
          desc: "Indulge in nature's bounty with our premium selection of dry fruits."
        },
        {
          name: 'Flour',
          img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTt0haFoysPYNtMqL8PuU4N_5-8muJ558gtYODFNQIxLcOVXTaq',
          price: 4.50,
          desc: 'Create culinary masterpieces with our premium flour ,the essential ingredient for every bake'
        },
        {
          name: 'Beverages',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGw57Kpp6mgFRNaCc881sj82mNNCZ8q_4twYB5ZWAwkqQwH7rV',
          price: 2.50,
          desc: 'Quench your thirst with our refreshing beverages, crafted for pure enjoyment'
        }
      ]
];
// const products = [
//     {
//         name : "Frozen Food",
//         img : "https://img.freepik.com/free-photo/flat-lay-assortment-frozen-food_23-2148923166.jpg?t=st=1716539798~exp=1716543398~hmac=8a2313a37fc3e5ea3e191a54591b64e28c1637fd95bcab13429a88f57f1aa778&w=1800",
//         price : "10",
//         desc : "We offer a selection of frozen food items at our store."
//     },
//     {
//         name : "Pooja samagri",
//         img : "https://media.licdn.com/dms/image/D4E12AQG6UEBzEK8HyA/article-cover_image-shrink_600_2000/0/1700120936157?e=2147483647&v=beta&t=miE0Z9FxhZWUDPCEPIRB8SFDkqaBYPSTsuAv96_Do_o",
//         price : "20",
//         desc : "We carry a variety of Pooja samagri (religious items) in our store."
//     },
//     {
//         name : "Pickles",
//         img : "https://cdn.shopify.com/s/files/1/1857/6931/files/Indian-Pickle_10cc540d-27e3-4c82-b0ec-1d114a661776_600x600.jpg?v=1655543167",
//         price : "30",
//         desc : "We offer a variety of Pickles at our store."
//     },
//     {
//         name : "Breads and eggs",
//         img : " https://static.wixstatic.com/media/36ce83_acb934676c0f46aa98ad19ef5e3f2ab0~mv2.jpg/v1/fill/w_1000,h_666,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/36ce83_acb934676c0f46aa98ad19ef5e3f2ab0~mv2.jpg",
//         price : "40",
//         desc : "We offer a variety of Breads and eggs at our store."
//     }
// ];
async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded successfully");
}
module.exports = seedDB;