'use strict';

var params = module.exports = {};

// projection names to d3 function name
params.projNames = {
    // d3.geo.projection
    'equirectangular': 'equirectangular',
    'mercator': 'mercator',
    'azimuthal equal area': 'azimuthalEqualArea',
    'azimuthal equidistant': 'azimuthalEquidistant',
    'conic equal area': 'conicEqualArea',
    'conic conformal': 'conicConformal',
    'conic equidistant': 'conicEquidistant',
    'gnomonic': 'gnomonic',
    'stereographic': 'stereographic',
    'orthographic': 'orthographic',
    'transverse mercator': 'transverseMercator',
    'albers usa': 'albersUsa',
    // d3.geo.projection plugin
    'kavrayskiy7': 'kavrayskiy7'
};

// name of the axes
params.axesNames = ['lonaxis', 'lataxis'];

// max longitudinal angular span
params.lonaxisSpan = {
    'orthographic': 180,
    'azimuthal equal area': 360,
    'azimuthal equidistant': 360,
    'gnomonic': 160,  // TODO appears to make things work; is this correct?
    'stereographic': 360,
    '*': 360
};

// max latitudinal angular span
params.lataxisSpan = {
    'conic conformal': 150, // TODO appears to make things work; is this correct?
    '*': 180                // all other projections
};

// defaults for each scope
params.scopeDefaults = {
    world: {
        lonaxisRange: [-180, 180],
        lataxisRange: [-90, 90],
        projType: 'equirectangular',
        projRotate: [0, 0, 0]
    },
    usa: {
        lonaxisRange: [-180, -50],
        lataxisRange: [15, 80],
        projType: 'albers-usa'
    },
    europe: {
        lonaxisRange: [-30, 60],
        lataxisRange: [30, 80],
        projType: 'conic conformal',
        projRotate: [15, 0, 0],
        projParallels: [0, 60]
    },
    asia: {
        lonaxisRange: [22, 160],
        lataxisRange: [-15, 55],
        projType: 'mercator',
        projRotate: [0, 0, 0]
    },
    africa: {
        lonaxisRange: [-30, 60],
        lataxisRange: [-40, 40],
        projType: 'mercator',
        projRotate: [0, 0, 0]
    },
    'north america': {
        lonaxisRange: [-180, -45],
        lataxisRange: [5, 85],
        projType: 'conic conformal',
        projRotate: [-100, 0, 0],
        projParallels: [29.5, 45.5]
    },
    'south america': {
        lonaxisRange: [-100, -30],
        lataxisRange: [-60, 15],
        projType: 'mercator',
        projRotate: [0, 0, 0]
    }
};

// angular pad to avoid rounding error around clip angles
params.clippad = 1e-3;

// map projection precision
params.precision = 0.1;

// default land and water fill colors
params.landFillColor = '#3B5323';
params.waterFillColor = '#3399FF';

// locationmode to layer name
params.locationmodeToLayer = {
    'ISO-3': 'countries',
    'USA-states': 'subunits'
};

// SVG element for a sphere (use to frame maps)
params.sphereSVG = {type: 'Sphere'};

// base layer with a fill color
params.fillLayers = ['ocean', 'land', 'lakes'];

// base layer with a only a line color
params.lineLayers = ['subunits', 'countries', 'coastlines', 'rivers', 'frame'];

// all base layers
params.baseLayers = params.fillLayers.concat(params.lineLayers);

// base layers drawn over choropleth
params.baseLayersOverChoropleth = ['rivers', 'lakes'];
