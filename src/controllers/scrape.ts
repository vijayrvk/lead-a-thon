import * as request from 'request';
import * as cheerio from 'cheerio';

export const getAllDataController = (req, res) => {
    request("https://www.chessgames.com/chessecohelp.html", (error, response, html) => {
        if(!error && response.statusCode==200) {
            const $= cheerio.load(html);
            let scrapeData: any = $("body > font > p > table > tbody").text().split('\n');
            let allData = '';
            scrapeData.forEach((element, index) => {
                if(index % 2 == 0) {
                    element = element.substr(0, 3) + " " + element.substr(3);
                    allData += `${element} \n ${scrapeData[index + 1]}`
                }
            });
            res.send({
                statusCode: 200,
                data: allData
            })
        }

    });
}

export const getSpecificMoveController = (req, res) => {
    request("https://www.chessgames.com/chessecohelp.html", (error, response, html) => {
        if(!error && response.statusCode==200) {
            const $= cheerio.load(html);
            let scrapeData: any = $("body > font > p > table > tbody").text().split('\n');
            let allData;
            scrapeData.forEach((element, index) => {
                if(element.substr(0, 3).toLowerCase() == req.params.move.toLowerCase()) {
                    element = element.substr(3);
                    allData = `${element} \n ${scrapeData[index + 1]}`
                }
            });
            res.send({
                statusCode: 200,
                data: allData
            })
        }

    });
}