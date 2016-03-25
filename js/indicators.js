//fix labels

var config = {};

    config.colors = lg.colors(['#B8DBFE','#89C3FD','#59ABFD','#2A93FC','#206ED7','#154AB1','#0B258C','#000066']);

    config.countries = [{name:'Guinea',code:106,adm:1},
        {name:'Liberia',code:144,adm:1},
        {name:'Iraq',code:118,adm:1},
        {name:'Sierra Leone',code:221,adm:2},
        {name:'Yemen',code:269,adm:1}
    ];

var dataStoreID = '748b40dd-7bd3-40a3-941b-e76f0bfbe0eb';
var apiURL = 'https://data.hdx.rwlabs.org/api/3/action/datastore_search_sql';

var percentAccessor = function(d){
    if(isNaN(d) || d==null){
        return 'No Data';
    } else {
        return Math.round(d*100)+'%';
    }
}

var vanilla = function(d){
    if(isNaN(d) || d==null){
        return 'No Data';
    } else {
        return d;
    }
    },
    round1 = function(d){
        if(isNaN(d) || d==null){
            return 'No Data';
        } else {
            var dataValue = parseFloat(d).toFixed(1);
            return dataValue;
        }    
    },
    round2 = function(d){
        if(isNaN(d) || d==null){
            return 'No Data';
        } else {
            var dataValue = parseFloat(d).toFixed(1);
            return dataValue;
        }    
    };

var colors = ['#820000',"#D70000","#FF6E6E","#FFD7D7"]
var colorAccessorDarkBright = function(d,i,min,max){
    var range = max - min;
    var quarter = Math.round(((d-min)/range)*4)
    if(quarter==4){
        quarter=3
    }
    return quarter
}

var colorAccessorBrightDark = function(d,i,min,max){
    var range = max - min;
    var quarter = Math.floor(((d-min)/range)*4)
    if(quarter==4){
        quarter=3
    }
    return 3-quarter
}

config.columns = [
    {
        heading:'rCSI',
        display:'rCSI Median',
        domain:[0,56],
        labelAccessor:round1,
        colorAccessor:colorAccessorBrightDark,
        group:'Overview',
        value:'Median'
    },
    {
        heading:'rCSI>=1',
        display:'% using reduced coping mechanisms',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'Overview',
        value:'MEAN'
    },    
    {
        heading:'FCG<=2',
        display:'% Poor+Borderline Food Consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'Overview',
        value:'MEAN'
    },   
    {
        heading:'FCG==1',
        display:'% Poor Food Consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'Overview',
        value:'MEAN'
    },    
    {
        heading:'Sentiment',
        display:'Perceptions of Food Security',
        domain:[-1,1],
        labelAccessor:vanilla,
        colorAccessor:colorAccessorDarkBright,
        group:'Overview',
        value:'Median'
    },
    {
        heading:'rCSI',
        display:'rCSI Median',
        domain:[0,56],
        labelAccessor:round1,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'Median'
    },
    {
        heading:'rCSI',
        display:'rCSI Mean',
        domain:[0,56],
        labelAccessor:round2,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'rCSI>=1',
        display:'% using reduced coping mechanisms',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'BorrowOrHelp>=1',
        display:'% getting help or borrowing',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'ReduceNumMeals>=1',
        display:'% reducing meals',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'RestrictConsumption>=1',
        display:'% restricting consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'LimitPortionSize>=1',
        display:'% limiting portion size',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'LessExpensiveFood>=1',
        display:'% buying less expensive food',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorBrightDark,
        group:'rCSI',
        value:'MEAN'
    },
    {
        heading:'FCS',
        display:'Mean Food Consumption Score',
        domain:[0,112],
        labelAccessor:round2,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'FCG==1',
        display:'Poor Food Consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'FCG==2',
        display:'Borderline Food Consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'FCG==3',
        display:'Acceptable Food Consumption',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'Dairy>=3',
        display:'Consuming Dairy 3 or more Days/Week',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'Staples>=3',
        display:'Consuming Staples 3 or more Days/Week',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'Veg>=3',
        display:'Consuming Vegetables 3 or more Days/Week',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    },
    {
        heading:'Sugars>=6',
        display:'Consuming Sugars 6 or more Days/Week',
        domain:[0,1],
        labelAccessor:percentAccessor,
        colorAccessor:colorAccessorDarkBright,
        group:'FCS',
        value:'MEAN'
    }
];

function initCountry(ADM0_CODE){
    $('#wfp-viz-maplayer').slideUp(function(){
        $('#wfp-viz-gridmap').html('<p id="wfp-viz-loading">Loading...</i>')
        $('#wfp-viz-gridlayer').show();
    });
        //if(Number(feature.properties.ADM0_CODE)*1==Number(c.code)*1){
        //https://ds-ec2.scraperwiki.com/gfudhzb/r8kisejjlofexpc/sql?q=SELECT CASE WHEN StDev IS NULL OR (StDev IS NOT NULL AND Variable LIKE '%=%' AND (ifnull(CnfIntvHi,1)-ifnull(CnfIntvLo,0))/Mean<=0.12) OR (StDev IS NOT NULL AND Variable NOT LIKE '%=%' AND (ifnull(CnfIntvHi,Pctl95)-ifnull(CnfIntvLo,0))/Mean<=0.12) THEN Mean ELSE NULL END as MEAN, * FROM pblStatsSum4Maps WHERE ADM0_CODE='269' AND ADM1_CODE IS NOT NULL AND ADM2_CODE IS NULL AND ADM3_CODE IS NULL ORDER BY LENGTH(SvyYear), SvyYear,LENGTH(SvyMonthNum),SvyMonthNum
        ////https://ds-ec2.scraperwiki.com/gfudhzb/r8kisejjlofexpc/sql?q=SELECT CASE WHEN StDev IS NULL OR (StDev IS NOT NULL AND Variable LIKE '%=%' AND (ifnull(CnfIntvHi,1)-ifnull(CnfIntvLo,0))/Mean<=0.12) OR (StDev IS NOT NULL AND Variable NOT LIKE '%=%' AND (ifnull(CnfIntvHi,Pctl95)-ifnull(CnfIntvLo,0))/Mean<=0.12) THEN Mean ELSE NULL END as MEAN, Median, ADM1_CODE, SvyDate, Variable FROM pblStatsSum4Maps WHERE ADM0_CODE='269' AND ADM1_CODE IS NOT NULL AND ADM2_CODE IS NULL AND ADM3_CODE IS NULL ORDER BY LENGTH(SvyYear), SvyYear,LENGTH(SvyMonthNum),SvyMonthNum
        //https://ds-ec2.scraperwiki.com/gfudhzb/r8kisejjlofexpc/sql?q=SELECT CASE WHEN StDev IS NULL OR (StDev IS NOT NULL AND Variable LIKE '%=%' AND (ifnull(CnfIntvHi,1)-ifnull(CnfIntvLo,0))/Mean<=0.12) OR (StDev IS NOT NULL AND Variable NOT LIKE '%=%' AND (ifnull(CnfIntvHi,Pctl95)-ifnull(CnfIntvLo,0))/Mean<=0.12) THEN Mean ELSE NULL END as MEAN, * FROM pblStatsSum4Maps WHERE Variable='rCSI' AND ADM0_CODE='269' AND ADM1_CODE IS NOT NULL AND ADM2_CODE IS NULL AND ADM3_CODE IS NULL ORDER BY LENGTH(SvyYear), SvyYear,LENGTH(SvyMonthNum),SvyMonthNum
    loadData(ADM0_CODE);
}

function loadData(countryID){

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'https://ds-ec2.scraperwiki.com/gfudhzb/r8kisejjlofexpc/sql?q=SELECT%20CASE%20WHEN%20StDev%20IS%20NULL%20OR%20(StDev%20IS%20NOT%20NULL%20AND%20Variable%20LIKE%20%27%=%%27%20AND%20(ifnull(CnfIntvHi,1)-ifnull(CnfIntvLo,0))/Mean%3C=0.12)%20OR%20(StDev%20IS%20NOT%20NULL%20AND%20Variable%20NOT%20LIKE%20%27%=%%27%20AND%20(ifnull(CnfIntvHi,Pctl95)-ifnull(CnfIntvLo,0))/Mean%3C=0.12)%20THEN%20Mean%20ELSE%20NULL%20END%20as%20MEAN,%20Median,%20ADM1_CODE,%20SvyDate,%20Variable%20FROM%20pblStatsSum4Maps%20WHERE%20ADM0_CODE=%27269%27%20AND%20ADM1_CODE%20IS%20NOT%20NULL%20AND%20ADM2_CODE%20IS%20NULL%20AND%20ADM3_CODE%20IS%20NULL%20ORDER%20BY%20LENGTH(SvyYear),%20SvyYear,LENGTH(SvyMonthNum),SvyMonthNum',
      success: function(data) {
          loadGeo(countryID,data);
      }
    });
}

function loadGeo(countryID,data){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'data/'+countryID+'.geojson',
      success: function(geoData) {
          compileData(data,geoData,countryID);
      }
    });    
}

function compileData(data,geoData,countryID){
    //data comes in one variables per row per date
    //needs to be transformed into equivalent of csv per date
    //with variables across the top and adm1 down the first column
    var admcode = '';
    var admname = '';
    //different countries use different adm levels
    config.countries.forEach(function(c){
        if(Number(countryID)*1==Number(c.code)*1){
            if(c.adm==1){
                admcode = 'ADM1_CODE';
                admname = 'ADM1_NAME';
            } else {
                admcode = 'ADM2_CODE';
                admname = 'ADM2_NAME';
            };
        }
    });
    //create a list of which adm at which row from geom file
    var sac = {};
    var gridData = [];
    geoData.features.forEach(function(f,i){
        sac[f.properties[admcode]] = i;
    });
    //some variables are used more than once as both mean and median available
    //for each variable name create a list of each time is is used
    var vars = {};
    var meanormedian = {};
    config.columns.forEach(function(c){
        meanormedian[c['display']] = c['value'];
        if(c['heading'] in vars){
            vars[c['heading']].push(c['display']);
        } else {
            vars[c['heading']] = [c['display']];
        }
    });

    var outputData = {};
    var dates = [];
    //loop through data
    data.forEach(function(d){
        //check variable is one we need and adm we need
        if(d['Variable'] in vars &&sac[d[admcode]]!=undefined){
            //if csv for that date does not exist create empty array of no data
            if(dates.indexOf(d['SvyDate'])==-1){
                var gridData = [];
                geoData.features.forEach(function(f,i){
                    var gd = {joinID:f.properties[admcode],name:f.properties[admname]};
                    config.columns.forEach(function(c){
                        gd[c['display']] = 'No Data';
                    });
                    gridData.push(gd);
                });                
                outputData[d['SvyDate']] = gridData;
                dates.push(d['SvyDate']);
            }
            //push variables mean or median to appropriate columns
            vars[d['Variable']].forEach(function(v){
                outputData[d['SvyDate']][sac[d[admcode]]][v] = d[meanormedian[v]];
            })
            
        }
    });
    initGrid(outputData,dates,geoData,countryID);

    $('#catoverview').on('click',function(e){
        $('.wfp-viz-grid').hide();
        lg._selectedBar = -1;
        $('#wfp-viz-grid-overview').show();
    });    

    $('#catrcsi').on('click',function(e){
        $('.wfp-viz-grid').hide();
        lg._selectedBar = -1;
        $('#wfp-viz-grid-rcsi').show();
    });

    $('#catfcs').on('click',function(e){
        $('.wfp-viz-grid').hide();
        lg._selectedBar = -1;
        $('#wfp-viz-grid-fcs').show();
    });
}

function initGrid(data,dates,geom,countryID){

    lg.colors(colors);
    var admcode = '';
    var admname = '';
    var lastdate = dates[dates.length-1];
    config.countries.forEach(function(c){
        if(Number(countryID)*1==Number(c.code)*1){
            if(c.adm==1){
                admcode = 'ADM1_CODE';
                admname = 'ADM1_NAME';
            } else {
                admcode = 'ADM2_CODE';
                admname = 'ADM2_NAME';
            };
        }
    });

    var gridmap = new lg.map('#wfp-viz-gridmap').geojson(geom).nameAttr(admname).joinAttr(admcode).zoom(1).center([0,0]);

    var categories = ['Overview','rCSI','FCS'/*,'Housing'*/];

    var grid = {}; 

    categories.forEach(function(cat){
        var columns = [];
        config.columns.forEach(function(c){
            if(c['group']==cat){
                columns.push(new lg.column(c['display']).label(c['display']).domain(c['domain']).labelAccessor(c['labelAccessor']).colorAccessor(c['colorAccessor']));
            }
        });

        lg.colors = config.colors;

        grid[cat] = new lg.grid('#wfp-viz-grid-'+cat.toLowerCase())
            .data(data[lastdate])
            .width($('#wfp-viz-grid-'+cat.toLowerCase()).width())
            .height(775)
            .nameAttr('name')
            .joinAttr('joinID')
            .hWhiteSpace(5)
            .vWhiteSpace(5)
            .columns(columns)
            .labelAngle(65)
            .margins({top: 300, right: 70, bottom: 20, left: 120});
    });

    lg.init();
    bottommap = gridmap.map();

    var baselayer2 = L.tileLayer('https://{s}.tiles.mapbox.com/v3/reliefweb.l43d4f5j/{z}/{x}/{y}.png', {});

    baselayer2.addTo(bottommap);

    zoomToGeom(geom);        

    for (var i = 0; i < categories.length; i++){
        lg._gridRegister[i].updateData = updateData;
    }
    generateTimeSlider(dates,data);

    function zoomToGeom(geom){
        bottommap.invalidateSize()
        var bounds = d3.geo.bounds(geom);
        bottommap.fitBounds([[bounds[0][1],bounds[0][0]],[bounds[1][1],bounds[1][0]]]);
    }
    function generateTimeSlider(dates,data){
        var max = dates.length-1;
        var min = 0;
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        $('#wfp-viz-slider').html('<input id="wfp-viz-slider-input" type="range" min=0 max='+max+' value='+min+'>');
        
        $('#wfp-viz-slider-input').on('change',function(e){
            for (var i = 0; i < categories.length; i++){
                lg._gridRegister[i].updateData(data[dates[$('#wfp-viz-slider-input').val()]]);
            }
            var mdy = new Date(dates[$('#wfp-viz-slider-input').val()]);
            $('#wfp-viz-date').html(months[mdy.getMonth()]+' '+ mdy.getFullYear());
        });
        $('#wfp-viz-slider-input').change();
        var mdy = new Date(dates[$('#wfp-viz-slider-input').val()]);
        $('#wfp-viz-date').html(months[mdy.getMonth()]+' '+mdy.getFullYear());

    }

}

updateData = function(data){
        columns = this._initColumns(this._columns);
        _parent = this;
        _parent._data = data;
        columns.forEach(function(v,i){

            data.sort(function(a, b) {
                    return a[_parent._nameAttr].localeCompare(b[_parent._nameAttr]);
                });

                var newData = [];        

            var newData = [];

            data.forEach(function(d,i){
                var nd = {};
                nd.pos = i;
                nd.join = d[_parent._joinAttr];
                nd.value = d[v._dataName];
                newData.push(nd);
            });

            d3.selectAll('.bars'+i+'id'+_parent._idnum)
                .data(newData)
                .transition()
                .attr("width", function(d){
                        if(v._valueAccessor(d.value)==null||isNaN(v._valueAccessor(d.value)) || v._valueAccessor(d.value)===''){
                            return _parent._properties.boxWidth;
                        }
                        return _parent._properties.x[i](v._valueAccessor(d.value));
                    })
                .attr("fill",function(d,i2){
                        if(v._valueAccessor(d.value)==null||isNaN(v._valueAccessor(d.value)) || v._valueAccessor(d.value)===''){
                            return '#cccccc';
                        }                        
                        var c = v._colorAccessor(d.value,i2,v._domain[0],v._domain[1])
                        return v._colors[c];
                    });

            var dataSubset = [];

            newData.forEach(function(d){
                dataSubset.push({'key':d.join,'value':d.value, 'pos': d.pos});
            });                

            if(_parent._highlighted == i){    
                lg.mapRegister.colorMap(dataSubset,v);
            }
            d3.selectAll('.selectbars'+i+'id'+_parent._idnum)
                .data(newData)
                .on("mouseover.color",function(d,i2){
                        if(lg._selectedBar==-1){
                            lg.mapRegister.colorMap(dataSubset,v);
                        }
                        d3.selectAll('.dashgeom'+d.join).attr("fill-opacity",1);                        
                    })
                .on('click.color',function(d,i2){
                        lg.mapRegister.colorMap(dataSubset,v);
                    })

            d3.selectAll('.sortLabel'+i+'id'+_parent._idnum).on("mouseover.color",function(d,i2){
                        lg.mapRegister.colorMap(dataSubset,v);
                    });                
        });
    }


var bottommap;
initCountry(269);