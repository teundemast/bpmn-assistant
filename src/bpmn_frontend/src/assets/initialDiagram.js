// src/assets/initialDiagram.js
export default `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                  id="Definitions_1"
                  targetNamespace="http://bpmn.io/schema/bpmn">

  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" />

    <bpmn:task id="Task_1" name="Do something" />

    <!-- Parallel (AND) split -->
    <bpmn:parallelGateway id="Gateway_Split" />

    <bpmn:task id="Task_2" name="Parallel task A" />
    <bpmn:task id="Task_3" name="Parallel task B" />

    <!-- Parallel (AND) join -->
    <bpmn:parallelGateway id="Gateway_Join" />

    <!-- Exclusive (XOR) gateway -->
    <bpmn:exclusiveGateway id="Gateway_Exclusive" />

    <bpmn:endEvent id="EndEvent_1" />
    <bpmn:endEvent id="EndEvent_2" />

    <!-- Sequence flows -->
    <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1" />
    <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_1" targetRef="Gateway_Split" />
    <bpmn:sequenceFlow id="Flow_3" sourceRef="Gateway_Split" targetRef="Task_2" />
    <bpmn:sequenceFlow id="Flow_4" sourceRef="Gateway_Split" targetRef="Task_3" />
    <bpmn:sequenceFlow id="Flow_5" sourceRef="Task_2" targetRef="Gateway_Join" />
    <bpmn:sequenceFlow id="Flow_6" sourceRef="Task_3" targetRef="Gateway_Join" />

    <!-- From AND-join to XOR -->
    <bpmn:sequenceFlow id="Flow_7" sourceRef="Gateway_Join" targetRef="Gateway_Exclusive" />

    <!-- XOR branches to two different end events -->
    <bpmn:sequenceFlow id="Flow_8" sourceRef="Gateway_Exclusive" targetRef="EndEvent_1" />
    <bpmn:sequenceFlow id="Flow_9" sourceRef="Gateway_Exclusive" targetRef="EndEvent_2" />
  </bpmn:process>

  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">

      <!-- Nodes -->
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="150" y="140" width="36" height="36" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Task_1_di" bpmnElement="Task_1">
        <dc:Bounds x="240" y="120" width="100" height="80" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Gateway_Split_di" bpmnElement="Gateway_Split">
        <dc:Bounds x="380" y="135" width="50" height="50" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Task_2_di" bpmnElement="Task_2">
        <dc:Bounds x="500" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Task_3_di" bpmnElement="Task_3">
        <dc:Bounds x="500" y="210" width="100" height="80" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Gateway_Join_di" bpmnElement="Gateway_Join">
        <dc:Bounds x="650" y="135" width="50" height="50" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="Gateway_Exclusive_di" bpmnElement="Gateway_Exclusive">
        <dc:Bounds x="760" y="135" width="50" height="50" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="EndEvent_1_di" bpmnElement="EndEvent_1">
        <dc:Bounds x="880" y="110" width="36" height="36" />
      </bpmndi:BPMNShape>

      <bpmndi:BPMNShape id="EndEvent_2_di" bpmnElement="EndEvent_2">
        <dc:Bounds x="880" y="190" width="36" height="36" />
      </bpmndi:BPMNShape>

      <!-- Edges -->
      <bpmndi:BPMNEdge id="Flow_1_di" bpmnElement="Flow_1">
        <di:waypoint x="186" y="158" />
        <di:waypoint x="240" y="160" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_2_di" bpmnElement="Flow_2">
        <di:waypoint x="340" y="160" />
        <di:waypoint x="380" y="160" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_3_di" bpmnElement="Flow_3">
        <di:waypoint x="430" y="160" />
        <di:waypoint x="500" y="120" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_4_di" bpmnElement="Flow_4">
        <di:waypoint x="430" y="160" />
        <di:waypoint x="500" y="250" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_5_di" bpmnElement="Flow_5">
        <di:waypoint x="600" y="120" />
        <di:waypoint x="650" y="160" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_6_di" bpmnElement="Flow_6">
        <di:waypoint x="600" y="250" />
        <di:waypoint x="650" y="160" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_7_di" bpmnElement="Flow_7">
        <di:waypoint x="700" y="160" />
        <di:waypoint x="760" y="160" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_8_di" bpmnElement="Flow_8">
        <di:waypoint x="810" y="160" />
        <di:waypoint x="880" y="128" />
      </bpmndi:BPMNEdge>

      <bpmndi:BPMNEdge id="Flow_9_di" bpmnElement="Flow_9">
        <di:waypoint x="810" y="160" />
        <di:waypoint x="880" y="208" />
      </bpmndi:BPMNEdge>

    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>

</bpmn:definitions>`;
