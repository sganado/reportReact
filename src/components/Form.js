import React from 'react';
import useForm from './customHooks';
import {Icon,MenuItem,Select,Radio,FormControl,FormLabel,RadioGroup,Grid,Accordion,Typography,Paper,Box,Link,Checkbox,TextField,Button,FormControlLabel,AccordionSummary,AccordionDetails,Slider, Divider} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../assets/images/imagen_reportes.png';
import { DateTimePicker,DatePicker,KeyboardDatePicker,MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import PreloadSimple from './PreloadSimple';
import {BASE_API, BASE_FRONT} from '../utils/constantes'


const useStyles = makeStyles((theme) => ({
	root: {
	  height: '100vh',
	  color:'#438EB9'
	},
	image: {
	  backgroundImage: `url(${Logo})`,
	  backgroundRepeat: 'no-repeat',
	  backgroundColor:
		theme.palette.type === 'light' ? theme.palette.grey[20] : theme.palette.grey[700],
	  backgroundSize: 'cover',
	  backgroundPosition: 'center',
	},
	paper: {
	  margin: theme.spacing(8, 4),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
   
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	  backgroundColor:'#438EB9'
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  flexBasis: '33.33%',
	  flexShrink: 0,
	},
	colorFondo:{
	  backgroundColor:'#438EB9'
	}, 
	colorPrimary:{
	  color:'#438EB9'
	}, 
	colorLetra:{
	  color:'#438EB9'
	}, 
	colorBorder:{
	  backgroundBorder:'#438EB9'
	},
	accordion:{
	paddingLeft: '14px',
	paddingBottom: '14px',
	border: '2px #438EB9 solid'
	}
  
}));
  
export default function  Form () {
	const classes = useStyles();

    const AzulRadio = withStyles({
		root: {
		  color: '#438EB9',
		  '&$checked': {
			color: '#438EB9',
		  },
		},
		checked: {},
	  })((props) => <Radio color="default" {...props} />);
	  const CustomColorCheckbox = withStyles({
		root: {
		  color: "#438EB9",
		  "&$checked": {
			color: "#438EB9"
		  }
		},
		checked: {}
	  })((props) => <Checkbox color="default" {...props} />);
    const { 
		handleSubmit,
		handleInputChange,
		handleChangeAccordion,
		handleChangeEdad,
		valuetext,
		handleDateFROMchange,
		handleDateTOchange,
		handleInputCheckedChange,
		handleDateTimeChangeID,
		handleDateTimeChangePC,
		handleDateTimeChangeLlS,
		handleDateTimeChangeProcedimiento,
		inputs,
		expanded,
		paciente_ingreso_from,
		paciente_ingreso_to,
		paciente_edad,
		localeMap,
		locale,
		clinicaStemi_tipoTiempoID,
	    clinicaStemi_tipoTiempoPC,
	    clinicaStemi_tipoTiempoLlS,
	    procedimiento_fecha_procedimiento,
	    preload,
		reportesApply,
		reportesData
	} = useForm({
		paciente_sexo:"ALL",
		paciente:true,
		antecedentes:false,
		factoresRiesgos:false,
		clinica:false,
		datosAngio:false,
		lesiones:false,
		procedimiento:false,
		complicacionesSala:false,
		antecedente_EPOC:false,
		antecedente_IRC:false,
		antecedente_CRM:false,
		antecedente_ATC:false,
		antecedente_IAM:false,
		antecedente_ACV:false,
		antecedente_AIT:false,
		antecedente_FA:false,
		antecedente_HTP:false,
		antecedente_MCPH:false,
		antecedente_feyVI:"ninguno",
		antecedente_patologia_valvular:"0",
		antecedente_patologia_enfermedad:"0",
		antecedente_patologia_grado:"0",
		factor_riesgo_HTA:false,
		factor_riesgo_DLP:false,
		factor_riesgo_DBT:false,
		factor_riesgo_DBT_IR:false,
		factor_riesgo_TBQ:false,
		factor_riesgo_Ex_TBQ:false,
		factor_riesgo_AHF:false,
		factor_riesgo_OBESIDAD:false,
		cuadroClinico_tipo:"NA",
		cuadroClinico_paroCardio:"0",
		cuadroClinico_shockCardio:"0",
		cuadroClinico_icg:"0",
		cuadroClinico_arritmiaBloqueoAv:"0",
		cuadroClinico_arritmiaTvFv:"0",
		cuadroClinico_tipoClaseFunc:"0",
		clinicaScasest_tipoAi:"0",
		clinicaScasest_tipoNs:"0",
		clinicaScasest_grsAi:"0",
		clinicaStemi_tipo:"0",
		clinicaStemi_tipoKk:"0",
		clinicaStemi_diurna:"0",
		clinicaStemi_tipoAtc:"0",
		angiografico_tipo_procedimiento:"NA",
		angiografico_vasos_enf:"",
		angiografico_vasos_tratados:"",
		angiografico_tronco:"NA",
		angiografico_syntax:"",
		angiografico_dominancia:"NA",
		angiografico_revascularizacion:"NA",
		angiografico_tipo_motivo:"NA",
		angiografico_tiempo_revascularizacion:"NA",
		lesion_arteria:"NA",
		lesion_localizacion:"NA",
		lesion_diam_vaso:"",
		lesion_timi_post:"",
		lesion_timi_pre:"",
		lesion_obstruccion_pre:"",
		lesion_obstruccion_post:"",
		lesion_tipo_longitud:"0",
		lesion_pres_trombo:"0",
		lesion_calc_severa:"0",
		lesion_restenosis:"0",
		lesion_angulacion:"0",
		lesion_tipo_oclusion:"0",
		lesion_tipo_bifurcacion:"0",
		procedimiento_tipo_acceso:"0",
		procedimiento_french:"1",
		procedimiento_contraste:"",
		procedimiento_kerma:"",
		procedimiento_tipo_fluroscopia:"",
		complicaciones_sala_ARM: false,
		complicaciones_sala_arritmia_ventricular: false,
		complicaciones_sala_bloqueo_AV_completo: false,
		complicaciones_sala_edema_agudo_pulmon: false,
		complicaciones_sala_obito: false,
		complicaciones_sala_oclusión_del_vaso_target: false,
		complicaciones_sala_paro_cardiorrespiratorio: false,
		complicaciones_sala_stroke: false,
		complicaciones_sala_taponamiento: false,
		stent_tipo:"0",
		stent_bare:"0",
		stent_graft:"0",
		stent_des:"0",
		lesion_predilatacion:"0",
		lesion_balon:"0",
		lesion_balon_diametro:"",
		lesion_balon_atmosfera:"",
		lesion_stent:"0",
		lesion_postdilatacion:"0",
		lesion_postdilatacion_diametro:"0",
		lesion_rotablator:"0",
		lesion_rotablator_oliva:"",
		lesion_tromboaspiracion:"0",
		lesion_cutting_balon:"0",
		lesion_cutting_balon_diametro:"",
		lesion_cutting_balon_atmosfera:"",
		lesion_proteccion_distral:"0",
		lesion_fibrinoliticos:"0",
		lesion_inhibidores:"0",
		lesion_bifurcacion:"0",
		lesion_kissing_final:"0",
		lesion_microcateter:"0",
		lesion_cto_cuerda:"0",
		lesion_angio_contralateral:"0",
		lesion_cto_tiempo_cruce:"0",
		lesion_recanalizacion_retrograda:"0",
		lesion_no_reflow:"0",
		lesion_blush_post:"0",
		lesion_exito_angio:"0",
		reportesApply:true,
		reportesData:""
      });
	 
	const Paciente = (props) => {
		return ( 
		
		<Accordion  className={classes.accordion} expanded={expanded.paciente}  onChange={handleChangeAccordion("paciente")}> 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="pacientebh-content"
			id="pacientebh-header"
		>
	  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Paciente</strong></Typography>
	 
	</AccordionSummary>
	<FormLabel  component="legend" style={{paddingLeft:'20px'}}>Seleccione un rango de edad </FormLabel>
	
	<Grid container spacing={2}>
		<Grid item md={4} >
		<Slider
			className={classes.colorPrimary}
			min={1}
			max={100}
			value={paciente_edad}
			onChange={handleChangeEdad}
			valueLabelDisplay="auto"
			aria-labelledby="range-slider"
			getAriaValueText={valuetext}
			valueLabelDisplay="on"
		
      />
	  
		</Grid>
		<Grid item md={8} ></Grid>
	 	<Grid item md={12} >
		 <FormControl component="fieldset">
      <FormLabel component="legend">Sexo</FormLabel>
		<RadioGroup row={true} aria-label="gender" name="paciente_sexo" onFocus={(event) => event.stopPropagation()} value={inputs.paciente_sexo} onChange={handleInputChange}>
			<FormControlLabel  value={"F"}  
             control={<AzulRadio  />} label="Femenino" />
			<FormControlLabel value={"M"}   onClick={(event) => { event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();}}
              control={<AzulRadio />} label="Masculino" />
			<FormControlLabel value={"ALL"}  onClick={(event) => { event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();}}
             control={<AzulRadio />} label="Ambos" />
			
		</RadioGroup>
    </FormControl>
		</Grid> 
		<FormLabel component="legend">Fecha de ingreso </FormLabel>
		<Grid item md={4} >
			<FormLabel component="legend">Desde </FormLabel>
			
			<DatePicker
				disableFuture
				openTo="year"
				format="dd/MM/yyyy"
				views={["year", "month", "date"]}
				value={paciente_ingreso_from}
				onChange={date => handleDateFROMchange(date)}
			/>
	 
		</Grid> 
		<Grid item md={4} >
		<FormLabel component="legend">Hasta </FormLabel>
		<DatePicker
				disableFuture
				openTo="year"
				format="dd/MM/yyyy"	
				views={["year", "month", "date"]}
				value={paciente_ingreso_to}
				onChange={date => handleDateTOchange(date)}
			/>
	
		</Grid>
		<Grid item md={4} ></Grid>
	</Grid>
	
	  </Accordion>)
  	}


	  const TotalReportes = ({classes}) => {
		
		return ( 
		
		<Accordion  className={classes.accordion} expanded={true}  onChange={handleChangeAccordion("reportes")}> 
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="pacientebh-content"
				id="pacientebh-header"
			>
				<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Resultados del reporte</strong></Typography>
			</AccordionSummary>
			
	
			<Grid item md={12} >
				{reportesData.pacientes !== undefined ?
				 (Object.entries(reportesData.pacientes).map(([clave,value])=>(
					<div>
						<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>{clave}</strong></Typography>
						<Typography ><strong>{value}</strong></Typography>
					</div>
				))):
				(<Typography ><strong>No hay resultados para estos filtros</strong></Typography>)}
			

			</Grid>
	 	
		
		
		
	
	
	  </Accordion>)
  	}
	
	const Antecedentes = (props)=>{
	  
		return(
		  <Accordion className={classes.accordion} expanded={expanded.antecedentes} onChange={handleChangeAccordion('antecedentes')}> 
			  <AccordionSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="antecedentesbh-content"
			  id="antecedentesbh-header"
			  >
			<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Antecedentes</strong></Typography>
		
			</AccordionSummary>
			<Grid container spacing={2}>
				<Grid item md={4} >
					<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_EPOC"  checked={inputs.antecedente_EPOC} value="epoc" onChange={handleInputCheckedChange} />}
					label=" Enfermedad Pulmonar Obstructiva Crónica (EPOC)"
					/>
					<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_IRC" checked={inputs.antecedente_IRC} value="irce" onChange={handleInputCheckedChange} />}
					label="Insuficiencia Renal Crónica (IRC)"
					/>
					<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_CRM" checked={inputs.antecedente_CRM}  value="crm_previa" onChange={handleInputCheckedChange} />}
					label="Cirugía de Revascularización Miocárdica (CRM)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_ATC"  value="atc_previa" checked={inputs.antecedente_ATC} onChange={handleInputCheckedChange} />}
					label="Angioplastia Transluminal Coronaria (ATC)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_IAM"  value="iam_previo" checked={inputs.antecedente_IAM} onChange={handleInputCheckedChange} />}
					label="Infarto Agudo de Miocardio (IAM)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_ACV"  value="acv" checked={inputs.antecedente_ACV} onChange={handleInputCheckedChange} />}
					label="Ataque Cerebrovascular (ACV)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_AIT"  value="ait" checked={inputs.antecedente_AIT} onChange={handleInputCheckedChange} />}
					label="Ataque isquémico transitorio (AIT)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_FA"  value="fa"  checked={inputs.antecedente_FA} onChange={handleInputCheckedChange} />}
					label="Fibrilación Auricular (FA)"
					/>
						<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_HTP"  value="htp"  checked={inputs.antecedente_HTP} onChange={handleInputCheckedChange} />}
					label="Hipertensión Pulmonar (HTP)"
					/> 
					<FormControlLabel
					control={<CustomColorCheckbox name="antecedente_MCPH" checked={inputs.antecedente_MCPH} value="mio_hiper"  onChange={handleInputCheckedChange} />}
					label="Miocardiopatía Hipertrófica (MCPH)"
					/> 
				</Grid>
			   	<Grid item md={8} >
					{/* <Grid container  >
						<Grid item md={12} >
							<FormLabel component="legend">FEy-VI</FormLabel>
				
							<Select
								variant="outlined"
								id="demo-simple-select"
								value={inputs.antecedente_feyVI}
								onChange={handleInputChange}
								name="antecedente_feyVI"
							>
								<MenuItem value={"ninguno"}>Ninguno</MenuItem>
								<MenuItem value={"< 35%"}>{`< 35%`}</MenuItem>
								<MenuItem value={"35 a 45%"}>35 a 45%</MenuItem>
								<MenuItem value={"45 a 55%"}>45 a 55%</MenuItem>
								<MenuItem value={"> 55%"}>{`> 55%`}</MenuItem>
							</Select>
							</Grid>
						
						<Grid item md={12} >
						
							<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Patologia Valular</strong></FormLabel>
							<Divider  variant="middle" className={classes.colorFondo} />
						</Grid>
						<Grid container   style={{paddingTop: '18px'}}>
							<Grid item md={4} >
								
								<FormLabel component="legend">Valvula</FormLabel>
			
							<Select
								variant="outlined"
								id="demo-simple-select"
								value={inputs.antecedente_patologia_valvular}
								onChange={handleInputChange}
								name="antecedente_patologia_valvular"
							>
								<MenuItem value={"0"}>Ninguno</MenuItem>
								<MenuItem value={"1"}> Aórtica </MenuItem>
								<MenuItem value={"2"}>Mitral</MenuItem>
								<MenuItem value={"3"}>tricuspiedea </MenuItem>
								<MenuItem value={"4"}>Pulmonar </MenuItem>
							
							</Select>
							</Grid>
							<Grid item md={4} >
								
								<FormLabel component="legend">Enfermedad</FormLabel>
			
							<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.antecedente_patologia_enfermedad}
							onChange={handleInputChange}
							name="antecedente_patologia_enfermedad"
							>
							<MenuItem value={"0"}>Ninguno</MenuItem>
							<MenuItem value={"1"}> Estenosis </MenuItem>
							<MenuItem value={"2"}>Insuficiencia</MenuItem>
							
							</Select>
							</Grid>
							<Grid item md={4} >
								
								<FormLabel component="legend">Grado</FormLabel>
			
							<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.antecedente_patologia_grado}
							onChange={handleInputChange}
							name="antecedente_patologia_grado"
							>
							<MenuItem value={"0"}>Ninguno</MenuItem>
							<MenuItem value={"1"}> Leve </MenuItem>
							<MenuItem value={"2"}>Moderado </MenuItem>
							<MenuItem value={"3"}>Severo </MenuItem>
							
							</Select>
							</Grid>
						</Grid>
					</Grid> */}
			  	</Grid>
			   
			   </Grid>
		</Accordion>
		)
	}
	const FactoresRiesgo = (props)=>{
		return(
		  <Accordion className={classes.accordion} expanded={expanded.factoresRiesgos} onChange={handleChangeAccordion('factoresRiesgos')}> 
			  <AccordionSummary
				  expandIcon={<ExpandMoreIcon />}
				  aria-controls="factores_de_riesgobh-content"
				  id="factores_de_riesgobh-header"
			  >
				<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Factores de riesgo</strong></Typography>
		
			  </AccordionSummary>
			  <FormControlLabel
				  control={<CustomColorCheckbox name="factor_riesgo_HTA"  value="1" checked={inputs.factor_riesgo_HTA} onChange={handleInputCheckedChange}  />}
				  label="HTA"
			  />
			  <FormControlLabel
				  
				  onFocus={(event) => event.stopPropagation()}
				  control={<CustomColorCheckbox name="factor_riesgo_DLP" value="2" checked={inputs.factor_riesgo_DLP} onChange={handleInputCheckedChange}  />}
				  label="DLP"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="factor_riesgo_DBT" value="3"  checked={inputs.factor_riesgo_DBT} onChange={handleInputCheckedChange} />}
				  label="DBT"
			  />
				  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="factor_riesgo_DBT_IR" value="4" checked={inputs.factor_riesgo_DBT_IR} onChange={handleInputCheckedChange} />}
				  label="DBT IR"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="factor_riesgo_TBQ" value="5" checked={inputs.factor_riesgo_TBQ} onChange={handleInputCheckedChange} />}
				  label="TBQ"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="factor_riesgo_Ex_TBQ" value="6"  checked={inputs.factor_riesgo_Ex_TBQ} onChange={handleInputCheckedChange} />}
				  label="Ex TBQ"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="factor_riesgo_AHF" value="6" checked={inputs.factor_riesgo_AHF} onChange={handleInputCheckedChange}  />}
				  label="AHF"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox value="7" name="factor_riesgo_OBESIDAD" checked={inputs.factor_riesgo_OBESIDAD} onChange={handleInputCheckedChange}  />}
				  label="OBESIDAD"
			  />
		</Accordion>
		)
	}
	const Clinica = (props)=>{
		return(
		   <Accordion className={classes.accordion} expanded={expanded.clinica} onChange={handleChangeAccordion('clinica')}> 
		   <AccordionSummary
			   expandIcon={<ExpandMoreIcon />}
			   aria-controls="clinicabh-content"
			   id="clinicabh-header"
		   >
		 <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Clínica</strong></Typography>
		 
			   </AccordionSummary>
			   <Grid container >
				   <Grid item md={5} >
					   <FormLabel component="legend">Cuadro Clínico</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						   value={inputs.cuadroClinico_tipo}
						   onChange={handleInputChange}
						   name="cuadroClinico_tipo"
					   >
						   
						   <MenuItem value={"NA"}> Todos </MenuItem>
						   <MenuItem value={0}> Isquemia silente </MenuItem>
						   <MenuItem value={1}>Angina crónica estable </MenuItem>
						   <MenuItem value={2}>SCASEST </MenuItem>
						   <MenuItem value={3}>IAM </MenuItem>
						   <MenuItem value={4}>IAM NO Q </MenuItem>
					   </Select>
				   </Grid>
			   <Grid item md={7} >
				   
				{/* 	   <FormControl component="fieldset">
						   <FormLabel component="legend">Paro Cardiaco</FormLabel>
						   <RadioGroup row={true} aria-label="gender" name="cuadroClinico_paroCardio" value={inputs.cuadroClinico_paroCardio} onChange={handleInputChange}>
							   <FormControlLabel  value="1"  control={<AzulRadio  />} label="Si" />
							   <FormControlLabel value="0"   control={<AzulRadio />} label="No" />
						   </RadioGroup>
						   
						   <FormLabel component="legend">Shock Cardiogéncio</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="cuadroClinico_shockCardio" value={inputs.cuadroClinico_shockCardio} onChange={handleInputChange}>
							   <FormControlLabel value="1"   control={<AzulRadio  />} label="Si" />
							   <FormControlLabel value="0" control={<AzulRadio />} label="No" />
							   
							   
						   </RadioGroup> 
						   <FormLabel component="legend">ICC (insuficiencia cardiaca)</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="cuadroClinico_icg" value={inputs.cuadroClinico_icg} onChange={handleInputChange}>
							   
							   <FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
							   <FormControlLabel value="0" control={<AzulRadio  />} label="No" />
						   
							   
						   </RadioGroup> 
						   <FormLabel component="legend">Bloqueo AV Grado 2B o 3 Asistolia</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="cuadroClinico_arritmiaBloqueoAv" value={inputs.cuadroClinico_arritmiaBloqueoAv} onChange={handleInputChange}>
							   
							   <FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
							   <FormControlLabel value="0" control={<AzulRadio  />} label="No" />
							   
						   </RadioGroup>
						   <FormLabel component="legend">TV-FV</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="cuadroClinico_arritmiaTvFv" value={inputs.cuadroClinico_arritmiaTvFv} onChange={handleInputChange}>
							   
							   <FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
							   <FormControlLabel value="0" control={<AzulRadio  />} label="No" />
						   
							   
						   </RadioGroup>  
					   </FormControl>
					
					{inputs.cuadroClinico_tipo === "1" &&
					   <FormControl component="fieldset">
					   <FormLabel component="legend">Clase Funcional</FormLabel>
							<RadioGroup 
							row={true} 
							aria-label="gender" 
							name="cuadroClinico_tipoClaseFunc" 
							onChange={handleInputChange}
							value={inputs.cuadroClinico_tipoClaseFunc}>
							   
							   <FormControlLabel value="0"   control={<AzulRadio />} label="I" />
							   <FormControlLabel value="1" control={<AzulRadio  />} label="II" />
							   <FormControlLabel value="2" control={<AzulRadio  />} label="III" />
							   <FormControlLabel value="3" control={<AzulRadio  />} label="IV" />
						   
							   
						   </RadioGroup>  
					   </FormControl>
					}
					 {inputs.cuadroClinico_tipo === "2" &&
					   <FormControl component="fieldset">
					   
					   <FormLabel component="legend">Angina Inestable</FormLabel>
   
						   <Select
							   	variant="outlined"
							   	id="demo-simple-select"
							  	value={inputs.clinicaScasest_tipoAi}
							   	name="clinicaScasest_tipoAi"
								onChange={handleInputChange}

						   >
							   
							   <MenuItem value={"0"}>Ninguna </MenuItem>
							   <MenuItem value={"1"}>Angina de Reposo/Acelerada  </MenuItem>
							   <MenuItem value={"2"}>Angina de Reciente Comienzo  </MenuItem>
							   <MenuItem value={"3"}>Angina Post Infarto  </MenuItem>
							   <MenuItem value={"4"}>Angina Post Revascularizacion - POST ATC </MenuItem>
							   <MenuItem value={"5"}>Angina Post Revascularizacion - POST CRM </MenuItem>
							   <MenuItem value={"6"}>Angina Progresiva </MenuItem>
						   </Select>
				   
						   <FormLabel component="legend">Grace Risk Score</FormLabel>
   
						   <Select
							   variant="outlined"
							   id="demo-simple-select"
							   value={inputs.clinicaScasest_grsAi}
							   name="clinicaScasest_grsAi"
							   onChange={handleInputChange}
						   >
							   
							   <MenuItem value={"0"}>Ninguna </MenuItem>
							   <MenuItem value={"1"}>{`<109 pts`} </MenuItem>
							   <MenuItem value={"2"}>109 a 140 pts  </MenuItem>
							   <MenuItem value={"3"}>{`>140 pts`}</MenuItem>
						   
						   </Select>
   
						   <FormLabel component="legend">Tipo NSTEMI</FormLabel>
						   
						   <Select
							   variant="outlined"
							   id="demo-simple-select"
							  	value={inputs.clinicaScasest_tipoNs}
							   name="clinicaScasest_tipoNs"
							   onChange={handleInputChange}
						   >
							   
							   <MenuItem value={"0"}>Ninguna </MenuItem>
							   <MenuItem value={"1"}>Tipo Infra ST </MenuItem>
							   <MenuItem value={"2"}>Supra ST Transitorio  </MenuItem>
							   <MenuItem value={"3"}>Tipo T  </MenuItem>
							   <MenuItem value={"4"}>Indeterminado  </MenuItem>
						   </Select>
   
					   
					   </FormControl>
						   
					}
   
				   {inputs.cuadroClinico_tipo === "3" &&
					   <FormControl component="fieldset">
					   <FormLabel component="legend">localización</FormLabel>
					   <RadioGroup row={true} aria-label="gender" name="clinicaStemi_tipo" value={inputs.clinicaStemi_tipo} onChange={handleInputChange}>
						   <FormControlLabel  value="0"  control={<AzulRadio  />} label="Anterior" />
						   <FormControlLabel value="1"   control={<AzulRadio />} label="No anterior" />
					   </RadioGroup>
					   
					   <FormLabel component="legend">Killip-Kimball clase</FormLabel>
						<RadioGroup row={true} aria-label="gender" name="clinicaStemi_tipoKk" value={inputs.clinicaStemi_tipoKk} onChange={handleInputChange}>
						   <FormControlLabel value="0"   control={<AzulRadio  />} label="A" />
						   <FormControlLabel value="1" control={<AzulRadio />} label="B" />
						   <FormControlLabel value="2" control={<AzulRadio />} label="C" />
						   <FormControlLabel value="3" control={<AzulRadio />} label="D" />
						   
						   
					   </RadioGroup> 
					   <FormLabel component="legend">Tipo ATC</FormLabel>
						<RadioGroup row={true} aria-label="gender" name="clinicaStemi_tipoAtc" value={inputs.clinicaStemi_tipoAtc} onChange={handleInputChange}>
						   
						   <FormControlLabel value="0"   control={<AzulRadio />} label="Primaria" />
						   <FormControlLabel value="1" control={<AzulRadio  />} label="Rescate" />
						   <FormControlLabel value="2" control={<AzulRadio  />} label="Facilitada" />
					   
						   
					   </RadioGroup> 
					   <FormLabel component="legend">Diurna</FormLabel>
						<RadioGroup row={true} aria-label="gender" name="clinicaStemi_diurna"  value={inputs.clinicaStemi_diurna} onChange={handleInputChange}>
						   
						   <FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
						   <FormControlLabel value="0" control={<AzulRadio  />} label="No" />
						   
					   </RadioGroup>
					
					  <DateTimePicker
							clearable
							value={clinicaStemi_tipoTiempoID}
							onChange={handleDateTimeChangeID}
							views={["year","month","date","hours","minutes"]}
							label="Inicio del dolor"
							format="dd/MM/yyyy hh:mm a"	
						/>
						 <DateTimePicker
							clearable
							value={clinicaStemi_tipoTiempoLlS}
							onChange={handleDateTimeChangeLlS}
							views={["year","month","date","hours","minutes"]}
							label="Llegada al Sanatorio"
							format="dd/MM/yyyy hh:mm a"	
						/>
					 	 <DateTimePicker
							clearable
							value={clinicaStemi_tipoTiempoPC}
							onChange={handleDateTimeChangePC}
							views={["year","month","date","hours","minutes"]}
							label="Pase de cuerda"
							format="dd/MM/yyyy hh:mm a"	
						/>
					  
					
					
				   </FormControl>
					   
				   } */}
			   </Grid> 
		   </Grid> 
		 </Accordion >
		)
	}
	const DatosAngiograficos = (props)=>{

		return(
			<Accordion className={classes.accordion}  expanded={expanded.datosAngio} onChange={handleChangeAccordion('datosAngio')}> 
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="datos_angiograficosbh-content"
				id="datos_angiograficosbh-header"
			>
		  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Datos angiográficos</strong></Typography>
		  </AccordionSummary>
		 <Grid container spacing={1}>
			 <Grid item md={12}>
				<FormLabel component="legend">Tipo Procedimiento</FormLabel>
	
					<Select
						variant="outlined"
						id="demo-simple-select"
						value={inputs.angiografico_tipo_procedimiento}
						onChange={handleInputChange}
						name="angiografico_tipo_procedimiento"
					>
					<MenuItem value={"NA"}> Todos </MenuItem>
					<MenuItem value={0}>Programado </MenuItem>
					<MenuItem value={1}>Urgencia </MenuItem>
					<MenuItem value={2}>Emergencia </MenuItem>
					
				</Select>
			
			</Grid>
				
				<Grid item md={4}>
				<FormLabel component="legend">Numero de Vasos Enfermos</FormLabel>
					<TextField
						id="vasos_enf"
						type="number"
						value={inputs.angiografico_vasos_enf}
						onChange={handleInputChange}
						name="angiografico_vasos_enf"
					/>
				</Grid>
				<Grid item md={4}>
				<FormLabel component="legend">Vasos tratados </FormLabel>
					<TextField
						id="vasos_tratados"
						type="number"
						value={inputs.angiografico_vasos_tratados}
						onChange={handleInputChange}
						name="angiografico_vasos_tratados"
					/>
				</Grid>
				<Grid item md={4}></Grid>
				<Grid item md={12}>
				<FormLabel component="legend">Tronco</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="angiografico_tronco" value={inputs.angiografico_tronco} onChange={handleInputChange}>
						<FormControlLabel  value="1"  control={<AzulRadio  />} label="Si" />
						<FormControlLabel value="0"   control={<AzulRadio />} label="No" />
					</RadioGroup>
				</Grid>
				<Grid item md={12}>
				<FormLabel component="legend">Syntax</FormLabel>
					<TextField
						id="syntax"
						type="number"
						value={inputs.angiografico_syntax}
						onChange={handleInputChange}
						name="angiografico_syntax"
					/>
				</Grid>
				<Grid item md={12}>
				<FormLabel component="legend">Dominancia</FormLabel>
	
					<Select
						variant="outlined"
						id="demo-simple-select"
						
						value={inputs.angiografico_dominancia}
						onChange={handleInputChange}
						name="angiografico_dominancia"
					>
						 <MenuItem value={"NA"}> Todos </MenuItem>
						<MenuItem value={"0"}>CD - Coronaria Derecha </MenuItem>
						<MenuItem value={"1"}>Circunfleja </MenuItem>
					
					</Select>
				</Grid>
			
				<Grid item md={12}>
				<FormLabel component="legend">Revascularización</FormLabel>
	
					<Select
						variant="outlined"
						id="demo-simple-select"
						value={inputs.angiografico_revascularizacion}
						onChange={handleInputChange}
						name="angiografico_revascularizacion"
					>
						 <MenuItem value={"NA"}> Todos </MenuItem>
						<MenuItem value={"0"}>Completa Procedimiento Unico </MenuItem>
						<MenuItem value={"1"}>Completa Multiple Procedimientos </MenuItem>
						<MenuItem value={"2"}>Incompleta </MenuItem>
					
					</Select>
				</Grid>
			
				<Grid item md={12}>
				<FormLabel component="legend">Motivo del Procedimiento</FormLabel>
	
					<Select
						variant="outlined"
						id="demo-simple-select"
						value={inputs.angiografico_tipo_motivo}
						onChange={handleInputChange}
						name="angiografico_tipo_motivo"
					>
						 <MenuItem value={"NA"}> Todos </MenuItem>
						<MenuItem value={"0"}>Angioplastia Primaria </MenuItem>
						<MenuItem value={"1"}>Diferido </MenuItem>
						<MenuItem value={"2"}>Evento </MenuItem>
						
					</Select>
				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">Revascularización en 30 días</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="angiografico_tiempo_revascularizacion" value={inputs.angiografico_tiempo_revascularizacion} onChange={handleInputChange} >
						<FormControlLabel  value="1"  control={<AzulRadio  />} label="Si" />
						<FormControlLabel value="0"   control={<AzulRadio />} label="No" />
					</RadioGroup>
				</Grid>
			</Grid>
				
			
		  </Accordion>
		)
	 }
	 const Lesiones = (props)=>{
		return(
		   <Accordion className={classes.accordion} expanded={expanded.lesiones} onChange={handleChangeAccordion('lesiones')} > 
				<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="lesionesbh-content"
				id="lesionesbh-header"
				>
					<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Lesiones</strong></Typography>
			
				</AccordionSummary>
			   	<Grid container spacing={1}>
					<Grid item md={12} >
						<FormLabel  style={{paddingTop: '18px',color: 'black'}}><strong>Vaso</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
					</Grid>
			 
					<Grid item md={6}>
						<FormLabel component="legend">Vaso</FormLabel>
	
						<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.lesion_arteria}
							onChange={handleInputChange}
							name="lesion_arteria"
						>
						<MenuItem value={"NA"}> Todos </MenuItem>
						<MenuItem value={"1"}>TCI </MenuItem>
						<MenuItem value={"2"}>Da </MenuItem>
						<MenuItem value={"3"}>Cx </MenuItem>
						<MenuItem value={"4"}>Cd </MenuItem>
						<MenuItem value={"5"}>Dg </MenuItem>
						<MenuItem value={"6"}>R. intermedio  </MenuItem>
						<MenuItem value={"7"}>Pm - Da </MenuItem>
						<MenuItem value={"8"}>Pm - cd </MenuItem>
						<MenuItem value={"9"}>Pm - cx  </MenuItem>
						<MenuItem value={"10"}>Pv - Da  </MenuItem>
						<MenuItem value={"11"}>Pv - cd  </MenuItem>
						<MenuItem value={"12"}>Pv - cx  </MenuItem>
						<MenuItem value={"13"}>Pv - Dg  </MenuItem>
						<MenuItem value={"14"}>PR - Da  </MenuItem>
						<MenuItem value={"15"}>PR - Cd </MenuItem>
						<MenuItem value={"16"}>PR - Cx </MenuItem>
						<MenuItem value={"17"}>PR - Dg  </MenuItem>
						<MenuItem value={"18"}>RAMO  </MenuItem>
						<MenuItem value={"19"}>LATERO </MenuItem>
						<MenuItem value={"20"}>VENTRICULAR </MenuItem>
	
						</Select>
	
				   	</Grid>
				   
					<Grid item md={6}>
					   <FormLabel component="legend">Seleccionen por localización</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_localizacion}
						   onChange={handleInputChange}
						   name="lesion_localizacion"
					   >
						<MenuItem value={"NA"}> Todos </MenuItem>
					   <MenuItem value={"1"}>Ostial  </MenuItem>
					   <MenuItem value={"2"}>Proximal  </MenuItem>
					   <MenuItem value={"3"}>Medio  </MenuItem>
					   <MenuItem value={"4"}>Distal  </MenuItem>
					   <MenuItem value={"5"}>A. proximal  </MenuItem>
					   <MenuItem value={"6"}>A. distal   </MenuItem>
					   <MenuItem value={"7"}>Cuerpo</MenuItem>
					   <MenuItem value={"8"}>Primera posterolateral</MenuItem>
					   <MenuItem value={"9"}>Descendente posterior</MenuItem>
					   <MenuItem value={"10"}>Diagonal </MenuItem>
					   <MenuItem value={"11"}>PRIMERA MARGINAL </MenuItem>
					   <MenuItem value={"12"}>RAMO AURICULOVENTRICULAR </MenuItem>
					   <MenuItem value={"13"}>LATERAL ALTA </MenuItem>
					   <MenuItem value={"14"}>PRIMERA SEPTAL </MenuItem>
					   <MenuItem value={"15"}>SEGUNDO POSTEROLATERAL </MenuItem>
					   <MenuItem value={"16"}>SEGUNDA MARGINAL </MenuItem>
					   <MenuItem value={"17"}>TERCERA MARGINAL    </MenuItem>
					   <MenuItem value={"18"}>SEGUNDA DIAGONAL  </MenuItem>
   
					   </Select>
   
				   </Grid>
   
					{/* <Grid item md={12} >
				
						<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Características de la lesión</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
					</Grid>
					<Grid item md={12}>
			
				<FormLabel component="legend">Diámetro del vaso</FormLabel>
					<TextField
						id="diam_vaso"
						type="number"
						value={inputs.lesion_diam_vaso}
						onChange={handleInputChange}
						name="lesion_diam_vaso"
					/>
					</Grid>
					<Grid item md={6}>
					<FormLabel component="legend">Timi Pre</FormLabel>
						<TextField
							id="timi_pre"
							type="number"
							value={inputs.lesion_timi_pre}
							onChange={handleInputChange}
							name="lesion_timi_pre"
						/>
					</Grid>
					<Grid item md={6}>
					<FormLabel component="legend">Timi Post</FormLabel>
						<TextField
							id="timi_post"
							type="number"
							value={inputs.lesion_timi_post}
							onChange={handleInputChange}
							name="lesion_timi_post"
						/>
					</Grid> */}

					{/* <Grid item md={12} >
					
						<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Lesión</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
					</Grid>
			   
					<Grid item md={6}>
					<FormLabel component="legend">Porcentaje de Obstrucción PRE</FormLabel>
						<TextField
							id="syntax"
							type="number"
							value={inputs.lesion_obstruccion_pre}
							onChange={handleInputChange}
							name="lesion_obstruccion_pre"
						/>
					</Grid>
					<Grid item md={6}>
					<FormLabel component="legend">Porcentaje de Obstrucción post</FormLabel>
						<TextField
							id="syntax"
							type="number"
							value={inputs.lesion_obstruccion_post}
							onChange={handleInputChange}
							name="lesion_obstruccion_post"
						/>
					</Grid>
			   		<Grid item md={12}>
					   <FormLabel component="legend">Longitud</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_tipo_longitud}
						   onChange={handleInputChange}
						   name="lesion_tipo_longitud"
					   >
					   <MenuItem value={"0"}>Ninguno  </MenuItem>
					   <MenuItem value={"1"}>{`>20 mm`}</MenuItem>
					   <MenuItem value={"2"}>{`<20 mm`}  </MenuItem>
					   </Select>
   
				   	</Grid>
				
				   	<Grid item md={4} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Calcificación severa</FormLabel>
								<RadioGroup row={true} aria-label="gender" name="lesion_calc_severa"  value={inputs.lesion_calc_severa} onChange={handleInputChange}>
									
									<FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
									<FormControlLabel value="0" control={<AzulRadio  />} label="No" />
									
								</RadioGroup>
							</FormControl>
					</Grid> 
					<Grid item md={4} >
						<FormControl component="fieldset">
					<FormLabel component="legend">Presencia de Trombo</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="lesion_pres_trombo"   value={inputs.lesion_pres_trombo} onChange={handleInputChange}>
									
									<FormControlLabel value="1"   control={<AzulRadio />} label="Si" />
									<FormControlLabel value="0" control={<AzulRadio  />} label="No" />
									
								</RadioGroup>
						</FormControl>
				
					</Grid> 
					<Grid item md={4} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Reestenosis</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_restenosis"  value={inputs.lesion_restenosis} onChange={handleInputChange}>
										
										<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
										<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
										
									</RadioGroup>
						</FormControl>
					</Grid> 
				   	<Grid item md={4}>
					   <FormLabel component="legend">Angulación</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						   value={inputs.lesion_angulacion} 
						   onChange={handleInputChange}
						   name="lesion_angulacion"
					   >
					   <MenuItem value={"0"}>Ninguno  </MenuItem>
					   <MenuItem value={"1"}>40-60 </MenuItem>
					   <MenuItem value={"2"}>60-70  </MenuItem>
					   <MenuItem value={"3"}>+75  </MenuItem>
					   </Select>
   
				   	</Grid>
				
				   <Grid item md={4}>
					   <FormLabel component="legend">Tipo de oclusión</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_tipo_oclusion} 
						   onChange={handleInputChange}
						   name="lesion_tipo_oclusion"
					   >
					   <MenuItem value={"0"}>Ninguno  </MenuItem>
					   <MenuItem value={"1"}>{`< 3 Meses `}</MenuItem>
					   <MenuItem value={"2"}>{`> 3 Meses `}  </MenuItem>
					   <MenuItem value={"3"}>J-CTO   </MenuItem>
   
					   </Select>
   
				   </Grid>
				   <Grid item md={4}>
					   <FormLabel component="legend">Tipo de bifurcación</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						   value={inputs.lesion_tipo_bifurcacion} 
						   onChange={handleInputChange}
						   name="lesion_tipo_bifurcacion"
					   >
					   <MenuItem value={"0"}>Ninguno  </MenuItem>
					   <MenuItem value={"1"}>1,1,1 </MenuItem>
					   <MenuItem value={"2"}>1,1,0 </MenuItem>
					   <MenuItem value={"3"}>1,0,1 </MenuItem>
					   <MenuItem value={"4"}>0,1,1 </MenuItem>
					   <MenuItem value={"5"}>1,0,0  </MenuItem>
					   <MenuItem value={"6"}>0,1,0 </MenuItem>
					   <MenuItem value={"7"}>0,0,1 </MenuItem>
   
					   </Select>
   
				   </Grid> */}
				   {/* <Grid item md={12} >
			   
						<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Detalle</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
					</Grid>
					<Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Predilatacion</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_predilatacion"  value={inputs.lesion_predilatacion} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
					</Grid> 
		 
					<Grid item md={4} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Balon</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_balon"  value={inputs.lesion_balon} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
					</Grid> 
					<Grid item md={4}>
						<FormLabel component="legend">Balon Diametro</FormLabel>
							<TextField
								id="syntax"
								type="number"
								value={inputs.lesion_balon_diametro}
								onChange={handleInputChange}
								name="lesion_balon_diametro"
							/>
						</Grid>
					<Grid item md={4}>
						<FormLabel component="legend">Balon Atmosfera</FormLabel>
							<TextField
								id="syntax"
								type="number"
								value={inputs.lesion_balon_atmosfera}
								onChange={handleInputChange}
								name="lesion_balon_atmosfera"
							/>
					</Grid>
			
					<Grid item md={12} >
							<FormControl component="fieldset">
								<FormLabel component="legend">stent</FormLabel>
								<RadioGroup row={true} aria-label="gender" name="lesion_stent"  value={inputs.lesion_stent} onChange={handleInputChange}>
												
									<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
									<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
												
								</RadioGroup>
							</FormControl>
					</Grid> 
					<Grid item md={6} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Postdilatacion</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_postdilatacion"  value={inputs.lesion_postdilatacion} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
					</Grid> 
					<Grid item md={6}>
						<FormLabel component="legend">Postdilatacion Diametro</FormLabel>
							<TextField
								id="syntax"
								type="number"
								value={inputs.lesion_postdilatacion_diametro}
								onChange={handleInputChange}
								name="lesion_postdilatacion_diametro"
							/>
						</Grid>
					<Grid item md={6} >
							<FormControl component="fieldset">
								<FormLabel component="legend">Rotablator</FormLabel>
								<RadioGroup row={true} aria-label="gender" name="lesion_rotablator"  value={inputs.lesion_rotablator} onChange={handleInputChange}>
												
									<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
									<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
												
								</RadioGroup>
						</FormControl>
					</Grid> 
					<Grid item md={6}>
						<FormLabel component="legend">Rotablator Oliva</FormLabel>
							<TextField
								id="syntax"
								type="number"
								value={inputs.lesion_rotablator_oliva}
								onChange={handleInputChange}
								name="lesion_rotablator_oliva"
							/>
					</Grid>
					<Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Tromboaspiracion</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_tromboaspiracion"  value={inputs.lesion_tromboaspiracion} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
					</Grid> 
					<Grid item md={4} >
							<FormControl component="fieldset">
								<FormLabel component="legend">Cutting Balon</FormLabel>
								<RadioGroup row={true} aria-label="gender" name="lesion_cutting_balon"  value={inputs.lesion_cutting_balon} onChange={handleInputChange}>
												
									<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
									<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
												
								</RadioGroup>
							</FormControl>
					</Grid> 
		   
					<Grid item md={4}>
						<FormLabel component="legend">Cutting Balon Diametro</FormLabel>
							<TextField
								id="syntax"
								type="number"
								value={inputs.lesion_cutting_balon_diametro}
								onChange={handleInputChange}
								name="lesion_cutting_balon_diametro"
							/>
					</Grid>
					<Grid item md={4}>
							<FormLabel component="legend">Cutting Balon Atmosfera</FormLabel>
								<TextField
									id="syntax"
									type="number"
									value={inputs.lesion_cutting_balon_atmosfera}
									onChange={handleInputChange}
									name="lesion_cutting_balon_atmosfera"
								/>
					</Grid>
			  
			   		<Grid item md={12}>
					   <FormLabel component="legend">Sist. de Proteccion Distal</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_proteccion_distral}
						   onChange={handleInputChange}
						   name="lesion_proteccion_distral"
					   >
					   <MenuItem value={"0"}>Ninguno  </MenuItem>
					   <MenuItem value={"1"}>Percusurge </MenuItem>
					   <MenuItem value={"2"}>Moma   </MenuItem>
					   <MenuItem value={"3"}>Epifilter    </MenuItem>
					   <MenuItem value={"4"}>Angioguard    </MenuItem>
					   <MenuItem value={"5"}>Spider     </MenuItem>
					   <MenuItem value={"6"}>Emboshield     </MenuItem>
					   </Select>
   
				   </Grid>
				   <Grid item md={12}>
					   <FormLabel component="legend">Fibrinoliticos</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_fibrinoliticos}
						   onChange={handleInputChange}
						   name="lesion_fibrinoliticos"
					   >
					   <MenuItem value={"0"}>Ninguno </MenuItem>
					   <MenuItem value={"1"}>Streptonikasa </MenuItem>
					   <MenuItem value={"2"}>Urokinasa </MenuItem>
					   <MenuItem value={"3"}>TPA  </MenuItem>
					   <MenuItem value={"4"}>Reteplase  </MenuItem>
					   <MenuItem value={"5"}>Teneplase  </MenuItem>
					   <MenuItem value={"6"}>Alteplase  </MenuItem>
					   </Select>
   
				   </Grid>
				   <Grid item md={12}>
					   <FormLabel component="legend">Inhibidores</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_inhibidores}
						   onChange={handleInputChange}
						   name="lesion_inhibidores"
					   >
					   <MenuItem value={"0"}>Ninguno </MenuItem>
					   <MenuItem value={"1"}>Abcximab  </MenuItem>
					   <MenuItem value={"2"}>Eptifibatide  </MenuItem>
					   <MenuItem value={"3"}>Tirofibatide   </MenuItem>
					
					   </Select>
   
				   </Grid> */}
				   {/* <Grid item md={12} >

						<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Predilatacion</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
					</Grid>
					<Grid item md={6}>
					   <FormLabel component="legend">Técnica de Bifurcación</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_bifurcacion}
						   onChange={handleInputChange}
						   name="lesion_bifurcacion"
					   >
					   <MenuItem value={"0"}>Provisional  </MenuItem>
					   <MenuItem value={"1"}>Stent-Balon   </MenuItem>
					   <MenuItem value={"2"}>Culotte   </MenuItem>
					   <MenuItem value={"3"}>T Stent    </MenuItem>
					   <MenuItem value={"4"}>V Stent    </MenuItem>
					   <MenuItem value={"5"}>Crush    </MenuItem>
					   <MenuItem value={"6"}>Mini Crush    </MenuItem>
					   <MenuItem value={"7"}>DK Crush    </MenuItem>
					
					   </Select>
   
				   	</Grid>
				   	<Grid item md={6} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Kissing Final</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_kissing_final"  value={inputs.lesion_kissing_final} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
		   			</Grid> */} 
		   			{/* <Grid item md={12} >
						<FormLabel style={{paddingTop: '18px',color: 'black'}}><strong>Tecnicas CTO</strong></FormLabel>
						<Divider  variant="middle" className={classes.colorFondo} />
				  	</Grid>
				  	<Grid item md={12}>
					   <FormLabel component="legend">Microcateter</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_microcateter}
						   onChange={handleInputChange}
						   name="lesion_microcateter"
					   >
					   <MenuItem value={"0"}>Ninguna   </MenuItem>
					   <MenuItem value={"1"}>CORSAIR    </MenuItem>
					   <MenuItem value={"2"}>FINECROSS    </MenuItem>
					
					   </Select>
   
				   	</Grid>
				
				   	<Grid item md={12}>
					   <FormLabel component="legend">Cuerda</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_cto_cuerda}
						   onChange={handleInputChange}
						   name="lesion_cto_cuerda"
					   >
					   <MenuItem value={"0"}>Progress 40    </MenuItem>
					   <MenuItem value={"1"}>Progress 80     </MenuItem>
					   <MenuItem value={"2"}>Progress 120     </MenuItem>
					   <MenuItem value={"3"}>Progress 200     </MenuItem>
					   <MenuItem value={"4"}>Fielder XT     </MenuItem>
					   <MenuItem value={"5"}>Fielder XT-R     </MenuItem>
					   <MenuItem value={"6"}>SION Black     </MenuItem>
					   <MenuItem value={"7"}>SION     </MenuItem>
					   <MenuItem value={"8"}>Gaia     </MenuItem>
					
					   </Select>
   
				   </Grid>
				   <Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Angio contralateral</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_angio_contralateral"  value={inputs.lesion_angio_contralateral} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
		   			</Grid> 
					<Grid item md={12}>
					   <FormLabel component="legend">Tiempo cruce</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_cto_tiempo_cruce}
						   onChange={handleInputChange}
						   name="lesion_cto_tiempo_cruce"
					   >
					   <MenuItem value={"0"}>{`>30 mm `}    </MenuItem>
					   <MenuItem value={"1"}>{`<30 mm `}     </MenuItem>
					  
					
					   </Select>
   
				   	</Grid>
				   	<Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Recanalizacion retrograda</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_recanalizacion_retrograda"  value={inputs.lesion_recanalizacion_retrograda} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
		   			</Grid> 
					<Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">No Reflow</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_no_reflow"  value={inputs.lesion_no_reflow} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
		   			</Grid> 
					   <Grid item md={12}>
					   <FormLabel component="legend">Blush POST</FormLabel>
   
					   <Select
						   variant="outlined"
						   id="demo-simple-select"
						  
						   value={inputs.lesion_blush_post}
						   onChange={handleInputChange}
						   name="lesion_blush_post"
					   >
					   <MenuItem value={"0"}>0</MenuItem>
					   <MenuItem value={"1"}>1 </MenuItem>
					   <MenuItem value={"2"}>2 </MenuItem>
					   <MenuItem value={"3"}>3 </MenuItem>
					 
					
					   </Select>
   
				   	</Grid>
				   	<Grid item md={12} >
						<FormControl component="fieldset">
							<FormLabel component="legend">Exito Angiografico</FormLabel>
							<RadioGroup row={true} aria-label="gender" name="lesion_exito_angio"  value={inputs.lesion_exito_angio} onChange={handleInputChange}>
											
								<FormControlLabel value="1"    control={<AzulRadio />} label="Si" />
								<FormControlLabel value="0"  control={<AzulRadio  />} label="No" />
											
							</RadioGroup>
						</FormControl>
		   			</Grid> */} 
			   </Grid>
		 </Accordion>
		)
	}
	const Procedimiento = (props)=>{
		return(
			<Accordion className={classes.accordion}  expanded={expanded.procedimiento} onChange={handleChangeAccordion('procedimiento')}> 
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="procedimientobh-content"
				id="procedimientobh-header"
			>
		  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Procedimiento</strong></Typography>
		  
				</AccordionSummary>
			
			<Grid container spacing={1} >
		
			<Grid item md={12} >
				<FormLabel component="legend">Fecha de procedimiento </FormLabel>
	
					  <DateTimePicker
							clearable
							value={procedimiento_fecha_procedimiento}
							onChange={handleDateTimeChangeProcedimiento}
							views={["year","month","date","hours","minutes"]}
							format="dd/MM/yyyy hh:mm a"	
						/>
			</Grid> 
			<Grid item md={12}>
						<FormLabel component="legend">Acceso</FormLabel>
	
						<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.procedimiento_tipo_acceso}
							onChange={handleInputChange}
							name="procedimiento_tipo_acceso"
						>
						<MenuItem value={"0"}>Radial   </MenuItem>
						<MenuItem value={"1"}>Femoral </MenuItem>
						<MenuItem value={"2"}>Humeral  </MenuItem>
						</Select>
					</Grid>
					<Grid item md={12}>
						<FormLabel component="legend">French</FormLabel>
	
						<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.procedimiento_french}
							onChange={handleInputChange}
							name="procedimiento_french"
						>
						<MenuItem value={"0"}>5   </MenuItem>
						<MenuItem value={"1"}>6 </MenuItem>
						<MenuItem value={"2"}>7  </MenuItem>
						<MenuItem value={"3"}>8  </MenuItem>
						</Select>
					</Grid>
					<Grid item md={12}>
					<FormLabel component="legend">Contraste</FormLabel>
						<TextField
							id="num_cine"
							type="number"
							value={inputs.procedimiento_contraste}
							onChange={handleInputChange}
							name="procedimiento_contraste"
						/>
				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">Kerma</FormLabel>
						<TextField
							id="num_cine"
							type="number"
							value={inputs.procedimiento_kerma}
							onChange={handleInputChange}
							name="procedimiento_kerma"
						/>
				</Grid>
				<Grid item md={12}>
					<FormLabel component="legend">Tiempo Fluroscopia</FormLabel>
						<TextField
							id="num_cine"
							type="number"
							value={inputs.procedimiento_tipo_fluroscopia}
							onChange={handleInputChange}
							name="procedimiento_tipo_fluroscopia"
						/>
				</Grid>
			</Grid>
			</Accordion>
		)
	}
	const ComplicacionesEnSala = (props)=>{
		return(
		  <Accordion className={classes.accordion} expanded={expanded.complicacionesSala} onChange={handleChangeAccordion('complicacionesSala')}> 
			  <AccordionSummary
				  expandIcon={<ExpandMoreIcon />}
				  aria-controls="factores_de_riesgobh-content"
				  id="factores_de_riesgobh-header"
			  >
				<Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Complicaciones en Sala</strong></Typography>
		
			  </AccordionSummary>
			  <Grid container spacing={2}>
			<Grid item md={12} >
			  <FormControlLabel
				  control={<CustomColorCheckbox name="complicaciones_sala_obito"  value="1" checked={inputs.complicaciones_sala_obito} onChange={handleInputCheckedChange}  />}
				  label="Óbito"
			  />
			  
			  <FormControlLabel
				  
				  onFocus={(event) => event.stopPropagation()}
				  control={<CustomColorCheckbox name="complicaciones_sala_edema_agudo_pulmon" value="2" checked={inputs.complicaciones_sala_edema_agudo_pulmon} onChange={handleInputCheckedChange}  />}
				  label="Edema agudo de pulmón"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_paro_cardiorrespiratorio" value="3"  checked={inputs.complicaciones_sala_paro_cardiorrespiratorio} onChange={handleInputCheckedChange} />}
				  label="Paro cardiorrespiratorio"
			  />
				  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_ARM" value="4" checked={inputs.complicaciones_sala_ARM} onChange={handleInputCheckedChange} />}
				  label="ARM"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_arritmia_ventricular" value="5" checked={inputs.complicaciones_sala_arritmia_ventricular} onChange={handleInputCheckedChange} />}
				  label="Arritmia Ventricular"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_bloqueo_AV_completo" value="6"  checked={inputs.complicaciones_sala_bloqueo_AV_completo} onChange={handleInputCheckedChange} />}
				  label="Bloqueo AV completo"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_taponamiento" value="7" checked={inputs.complicaciones_sala_taponamiento} onChange={handleInputCheckedChange}  />}
				  label="Taponamiento"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_oclusión_del_vaso_target" value="8" checked={inputs.complicaciones_sala_oclusión_del_vaso_target} onChange={handleInputCheckedChange}  />}
				  label="Oclusión del vaso Target"
			  />
			  <FormControlLabel
				  
				  control={<CustomColorCheckbox name="complicaciones_sala_stroke" value="9" checked={inputs.complicaciones_sala_stroke} onChange={handleInputCheckedChange}  />}
				  label="stroke"
			  />
			  </Grid>
			  </Grid>
		</Accordion>
		)
	}
	const Stent = (props)=>{
		return(
		<Accordion className={classes.accordion} expanded={expanded.stent} onChange={handleChangeAccordion('stent')}> 
		<AccordionSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="stentobh-content"
			id="stentobh-header"
		>
		  <Typography className={`${classes.heading} ${classes.colorLetra}`}><strong>Stent</strong></Typography>
  
		</AccordionSummary>
		<Grid container spacing={2}>
			<Grid item md={6}>
				<FormLabel component="legend">Diámetro</FormLabel>
					<TextField
						id="stent_diametro"
						type="number"
						value={inputs.stent_diametro}
						onChange={handleInputChange}
						name="stent_diametro"
					/>
				</Grid>
				<Grid item md={6}>
				<FormLabel component="legend">Longitud</FormLabel>
					<TextField
						id="stent_longitud"
						type="number"
						value={inputs.stent_longitud}
						onChange={handleInputChange}
						name="stent_longitud"
					/>
				</Grid>
				<Grid item md={6}>
				<FormLabel component="legend">Tipo</FormLabel>
				
	
						<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.stent_tipo}
							onChange={handleInputChange}
							name="stent_tipo"
						>
						<MenuItem value={"0"}>Balon Expandible    </MenuItem>
						<MenuItem value={"1"}>Auto Expandible  </MenuItem>
						
						</Select>
				</Grid>
				<Grid item 	md={6}>
				
				<FormControl component="fieldset">
				<FormLabel component="legend">BARE</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="stent_bare" value={inputs.stent_bare} onChange={handleInputChange}>
						<FormControlLabel  value={"1"}  
						control={<AzulRadio  />} label="Si" />
						<FormControlLabel value={"0"}  
						control={<AzulRadio />} label="No" />
						
					</RadioGroup>
				</FormControl>
				</Grid>
				<Grid item md={6}>
				<FormControl component="fieldset">
				<FormLabel component="legend">GRAFT</FormLabel>
					<RadioGroup row={true} aria-label="gender" name="stent_graft" value={inputs.stent_graft} onChange={handleInputChange}>
						<FormControlLabel  value={"1"}  
						control={<AzulRadio  />} label="Si" />
						<FormControlLabel value={"0"}  
						control={<AzulRadio />} label="No" />
						
					</RadioGroup>
				</FormControl>
				</Grid>
				<Grid item 	md={6}>
				<FormLabel component="legend">DES</FormLabel>
				
	
						<Select
							variant="outlined"
							id="demo-simple-select"
							value={inputs.stent_des}
							onChange={handleInputChange}
							name="stent_des"
						>
						<MenuItem value={"0"}>Ninguna  </MenuItem>
						<MenuItem value={"1"}>Sirolimus </MenuItem>
						<MenuItem value={"2"}>Paclitaxel </MenuItem>
						<MenuItem value={"3"}>Everolimus </MenuItem>
						<MenuItem value={"4"}>Zotarolimus </MenuItem>
						<MenuItem value={"5"}>Tacrolimus </MenuItem>
						<MenuItem value={"6"}>Rapamicina </MenuItem>
						<MenuItem value={"7"}>Biolimus A9   </MenuItem>
						
						</Select>
				
				</Grid>
		</Grid>
  		</Accordion>
		)
	}
	
    return (
     	preload ? 
	    (<PreloadSimple text="Estamos generando el reporte"/>
		):(
			<Grid container component="main" className={classes.root}>
				<Grid item xs={false} sm={4} md={5} className={classes.image} />
     		 	<Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
				 	<div className={classes.paper}>
					 	
						
						<form onSubmit={handleSubmit}>
							<Typography component="h1" variant="h5">Formulario para sacar reportes <Button
					component={Link}
					href={BASE_FRONT}
					variant="contained"
					color="primary"
					className={classes.submit}>  Limpiar filtros </Button></Typography>
							<MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
									{reportesApply && <TotalReportes classes={classes} />}
									<Paciente />
									<Antecedentes/>
									<FactoresRiesgo/>
									<Clinica />
									<DatosAngiograficos />
									<Lesiones />
									{/* <Procedimiento />
									<Stent />
									<ComplicacionesEnSala /> */}
								</MuiPickersUtilsProvider>
							
							
							
						
							<Button
				
							type="submit" 
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							>
							Crear reporte
							</Button>
						</form>
					</div>
				</Grid>
				</Grid>
					)
				
			
			
	     
		
	     
	   
    )
}
