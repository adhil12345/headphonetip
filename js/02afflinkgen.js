 document.addEventListener("DOMContentLoaded", function() {
        var getAffiliatDe = document.querySelector("#AliExpressDetaiels").innerHTML;

        const proNam = getAffiliatDe.split("ProductName[")[1].split("]")[0];
        const afflink = getAffiliatDe.split("ProductAffiliateLnk[")[1].split("]")[0];
        const afflprorating = parseFloat(getAffiliatDe.split("RatingCount[")[1].split("]")[0]);

        // Create a new div element
        const newDiv = document.createElement("div");
        newDiv.className = "affi-price-main-display";

        // Set the HTML content
        const displayAff = newDiv.innerHTML = `
            <div class="affi-pro-img-display">${afflprorating}</div>
            <div class="affi-pro-name-display">
                <div class="affi-pro-name">${proNam}</div>
                <div class="affi-pro-ratring">${generateStars(afflprorating)}<span> ${afflprorating}</span></div>
            </div>
            <div class="affi-pro-aliExpress-button">
                <a style="color:white;" target="_blank" href="${afflink}">Check Price on <span style="color:red;font-weight: bold;text-shadow: 0px 1px 1px white;">AliExpress</span></a>
            </div>
        `;
        
        const checkAf = afflink.split(":")[0];
        
        if(afflink === checkAf){
        	document.querySelector("#displayAffLinkz").style.display = "none";
        } else {
			document.querySelector("#displayAffLinkz").innerHTML = displayAff;
		}

        
    });

    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '⭐';
        }

        if (halfStar) {
            stars += '⭐';
        }

        for (let i = 0; i < emptyStars; i++) {
            stars += '☆';
        }

        return stars;
    }
