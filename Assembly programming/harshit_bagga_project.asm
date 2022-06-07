ORG 0000H
		RESET:MOV 30H,#0H
		MOV 31H,#0H
		MOV 32H,#0H
		MOV A,#0FFH
		MOV P2,A
		CLR A
		
START:JNB P2.0, START
  JUMPT:MOV A,32H
    LCALL DELAY
        JB P2.1,RESET
         ADD A,#1
         DA A
            MOV 32H,A
	CJNE A,#60H,JUMPT
	    JB P2.1,RESET
	      MOV 32H,#0H
	          MOV A,31H
		  ADD A,#1
		     DA A
		       MOV 31H,A
	CJNE A,#60H, JUMPT
	    JB P2.1,RESET
	     MOV 31H,0
	       MOV A,30H
	         ADD A,#1
	           DA A 
	              MOV 30H,A
CJNE A,#24H,JUMPT
	  SJMP RESET
DELAY:
MOV R1,#0AH
	J2:MOV R2,#0AH
	J1:NOP
	NOP
	DJNZ R2,J1
	DJNZ R1,J2
	RET
END





	
	MOV 33H, #0	


	CLR P1.3		
	CLR P1.7		
	CLR P1.6		
	SETB P1.5		
	CLR P1.4		

	SETB P1.2		
	CLR P1.2		

	CALL delays		
	SETB P1.2		
	CLR P1.2		

	SETB P1.7		
	SETB P1.2		
	CLR P1.2		
	CALL delays		
	CLR P1.7		
	CLR P1.6		
	CLR P1.5		
	CLR P1.4		

	SETB P1.2		
	CLR P1.2		

	SETB P1.6		
	SETB P1.5		

	SETB P1.2		
	CLR P1.2		

	CALL delays		



	CLR P1.7		
	CLR P1.6		
	CLR P1.5		
	CLR P1.4		

	SETB P1.2		
	CLR P1.2		

	SETB P1.7		
	SETB P1.6		
	SETB P1.5		
	SETB P1.4		

	SETB P1.2		
	CLR P1.2		

	CALL delays		

	SETB P1.3		
	MOV R1, #30H	
repeat:
	MOV A, @R1		
	JZ last		
	CALL sendtime
	INC R1			
	JMP repeat		

last:
	JMP $


sendtime:
	MOV C, ACC.7		
	MOV P1.7, C			
	MOV C, ACC.6		
	MOV P1.6, C			
	MOV C, ACC.5		
	MOV P1.5, C			
	MOV C, ACC.4		
	MOV P1.4, C			

	SETB P1.2			
	CLR P1.2			

	MOV C, ACC.3		
	MOV P1.7, C			
	MOV C, ACC.2		
	MOV P1.6, C			
	MOV C, ACC.1		
	MOV P1.5, C			
	MOV C, ACC.0		
	MOV P1.4, C			

	SETB P1.2			
	CLR P1.2			

	CALL delays			

delays:
	MOV R0, #50
	DJNZ R0, $
	RET